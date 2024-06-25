import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Hero = () => {

  const [courseNumber, setCourseNumber] = useState('');
  const [courseName, setCourseName] = useState('');
  const [semester, setSemester] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSearch = {
      courseNumber,
      courseName,
      semester
    };

    console.log(newSearch);

    toast.success('Search submitted!');

    return navigate('/schedule');

  }

  return (
    <div className="flex items-start justify-center min-h-screen pt-20 bg-gray-100">
      <div className="bg-ksu-gold p-8 rounded-lg shadow-md max-w-md w-full">
        <section className="py-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Exam Schedule</h2>
            <p className="mt-2 mb-6 text-lg">
              Final exam lookup for Kennesaw State University students.
            </p>
            <form onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Course Number</label
              >
              <input
                type="text"
                id="courseNumber"
                name="courseNumber"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. CS6045"
                value={courseNumber}
                onChange={(e) => setCourseNumber(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Course Name</label
              >
              <input
                type="text"
                id="courseName"
                name="courseName"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Advanced Algorithms"
                
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="semester"
                className="block text-gray-700 font-bold mb-2"
                >Semester</label>
              <select
                id="semester"
                name="semester"
                className="border rounded w-full py-2 px-3"
                required
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option value="Spring2024">Spring 2024</option>
                <option value="Summer2024">Summer 2024</option>
                <option value="Fall2024">Fall 2024</option>
              </select>
            </div>
            <div>
              <button
                className="bg-ksu-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;