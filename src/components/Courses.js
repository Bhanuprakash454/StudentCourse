import React, { useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Java Full Stack Web Development (Adv)' },
    { id: 2, name: 'Enterprise Programming (Adv)' },
    { id: 3, name: 'Software Verification and Validation' },
    { id: 4, name: 'Management Information Systems' },
  ]);

  const enroll = (courseId) => {
    alert(`Enrolled in course with ID: ${courseId}`);
    // Logic to enroll the user in the course
  };

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name}
            <button onClick={() => enroll(course.id)}>Enroll</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
