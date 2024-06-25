import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';

dotenv.config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the backend');
});

app.post('/scrape', async (req, res) => {
    const { semester, courseNumber, courseName } = req.body;

    if (!semester || !courseNumber || !courseName) {
        return res.status(400).send('Please provide all required fields: semester, courseNumber, and courseName');
    }

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://srs-owlexpress.kennesaw.edu/StudentRegistrationSsb/ssb/term/termSelection?mode=search');

        console.log('Opened Webpage');

        await page.select('#term', semester);
        await page.click('#term-go');

        console.log('input term and clicked go');

        await page.waitForNavigation();

        await page.type('#courseNumber', courseNumber);
        await page.click('#search-go');
        console.log('input coursenumber and clicked go');

        await page.waitForSelector('.course-container');

        const courses = await page.evaluate(() => {
            const courseElements = document.querySelectorAll('.course-container');
            const courseData = [];

            courseElements.forEach((courseElement) => {
                const courseTitle = courseElement.querySelector('.course-title').innerText.trim();
                const courseMeetingTimes = courseElement.querySelector('.meeting-times').innerText.trim();
                const courseMeetingDays = courseElement.querySelector('.meeting-days').innerText.trim();

                courseData.push({
                    courseTitle,
                    courseMeetingTimes,
                    courseMeetingDays
                });
            });

            return courseData;
        });

        await browser.close();

        res.json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while scraping the website');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
