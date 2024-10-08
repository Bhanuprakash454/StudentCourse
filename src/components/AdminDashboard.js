import React, { useState } from 'react';

const AdminDashboard = () => {
  // Default data for courses, students, and faculty
  const [courses, setCourses] = useState([
    { id: 1, name: 'Java Full Stack Web Development (Adv)' },
    { id: 2, name: 'Enterprise Programming (Adv)' },
    { id: 3, name: 'Software Verification and Validation' },
    { id: 4, name: 'Management Information Systems' },
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: 'Nikhilesh Majety', email: '2200090167@kluniversity.in' },
    { id: 2, name: 'Ganesh Kumar', email: '2200090164@kluniversity.in' },
  ]);

  const [faculty, setFaculty] = useState([
    { id: 1, name: 'Jonnalagadda Surya Kiran', department: 'Computer Science' },
    { id: 2, name: 'Dinesh Kumar', department: 'Computer Science' },
    { id: 3, name: 'Priyanka', department: 'Computer Science' },
    { id: 4, name: 'Amarendra', department: 'Computer Science & Information Technology' },
  ]);

  // States for adding new entities
  const [newCourse, setNewCourse] = useState({ name: '' });
  const [newStudent, setNewStudent] = useState({ name: '', email: '' });
  const [newFacultyMember, setNewFacultyMember] = useState({ name: '', department: '' });

  // States for Timetable
  const [timetable, setTimetable] = useState({}); // Store scheduled courses by day and time
  const [activeTab, setActiveTab] = useState('courses'); // State to track the active tab

  const addCourse = () => {
    const courseId = courses.length + 1; // Generate new ID
    setCourses([...courses, { id: courseId, ...newCourse }]);
    setNewCourse({ name: '' }); // Reset the form
  };

  const removeCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const addStudent = () => {
    const studentId = students.length + 1; // Generate new ID
    setStudents([...students, { id: studentId, ...newStudent }]);
    setNewStudent({ name: '', email: '' }); // Reset the form
  };

  const removeStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const addFaculty = () => {
    const facultyId = faculty.length + 1; // Generate new ID
    setFaculty([...faculty, { id: facultyId, ...newFacultyMember }]);
    setNewFacultyMember({ name: '', department: '' }); // Reset the form
  };

  const removeFaculty = (id) => {
    setFaculty(faculty.filter(fac => fac.id !== id));
  };

  const addToTimetable = (day, time, courseName) => {
    setTimetable((prev) => ({
      ...prev,
      [day]: { ...prev[day], [time]: courseName },
    }));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {/* Navigation Icons */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('courses')}>Manage Courses</button>
        <button onClick={() => setActiveTab('students')}>Manage Students</button>
        <button onClick={() => setActiveTab('faculty')}>Manage Faculty</button>
        <button onClick={() => setActiveTab('timetable')}>Timetable Management</button>
      </div>

      {/* Courses Management */}
      {activeTab === 'courses' && (
        <div>
          <h3>Manage Courses</h3>
          <input
            type="text"
            placeholder="Course Name"
            value={newCourse.name}
            onChange={(e) => setNewCourse({ name: e.target.value })}
          />
          <button onClick={addCourse}>Add Course</button>
          
          <h4>Courses List</h4>
          <ul>
            {courses.map((course) => (
              <li key={course.id}>
                {course.name} 
                <button onClick={() => removeCourse(course.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Students Management */}
      {activeTab === 'students' && (
        <div>
          <h3>Manage Students</h3>
          <input
            type="text"
            placeholder="Student Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Student Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          />
          <button onClick={addStudent}>Add Student</button>

          <h4>Students List</h4>
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                {student.name} ({student.email})
                <button onClick={() => removeStudent(student.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Faculty Management */}
      {activeTab === 'faculty' && (
        <div>
          <h3>Manage Faculty</h3>
          <input
            type="text"
            placeholder="Faculty Name"
            value={newFacultyMember.name}
            onChange={(e) => setNewFacultyMember({ ...newFacultyMember, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Department"
            value={newFacultyMember.department}
            onChange={(e) => setNewFacultyMember({ ...newFacultyMember, department: e.target.value })}
          />
          <button onClick={addFaculty}>Add Faculty</button>

          <h4>Faculty List</h4>
          <ul>
            {faculty.map((fac) => (
              <li key={fac.id}>
                {fac.name} (Department: {fac.department})
                <button onClick={() => removeFaculty(fac.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Timetable Management */}
      {activeTab === 'timetable' && (
        <div>
          <h3>Timetable Management</h3>
          <h4>Assign Courses to Timetable</h4>
          <div>
            <label>Day:</label>
            <select id="day">
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </select>

            <label>Time Slot:</label>
            <select id="time">
              <option value="0:30 PM">06:30 PM</option>
              <option value="08:00 AM">08:00 AM</option>
              <option value="09:20 AM">09:20 AM</option>
              <option value="10:40 AM">10:40 AM</option>
              <option value="11:10 AM">11:10 AM</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="01:45 PM">01:45 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="03:40 PM">03:40 PM</option>
              <option value="04:30 PM">04:30 PM</option>
              <option value="05:30 PM">05:30 PM</option>
            </select>

            <label>Course:</label>
            <select id="course">
              {courses.map((course) => (
                <option key={course.id} value={course.name}>{course.name}</option>
              ))}
            </select>

            <button onClick={() => {
              const day = document.getElementById('day').value;
              const time = document.getElementById('time').value;
              const course = document.getElementById('course').value;
              addToTimetable(day, time, course);
            }}>
              Assign Course
            </button>
          </div>

          <h4>Timetable</h4>
          <table>
            <thead>
              <tr>
                <th>Time / Day</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              {['08:00 AM', '09:20 AM', '10:40 AM', '11:10 AM', '12:30 PM', '01:45 PM', '03:00 PM', '03:40 PM', '04:30 PM', '05:30 PM', '06:30 PM'].map((timeSlot) => (
                <tr key={timeSlot}>
                  <td>{timeSlot}</td>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <td key={`${day}-${timeSlot}`}>
                      {timetable[day] && timetable[day][timeSlot] ? timetable[day][timeSlot] : 'Free'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
