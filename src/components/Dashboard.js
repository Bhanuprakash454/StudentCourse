import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ userRole }) => {
  const navigate = useNavigate();

  const renderOptions = () => {
    if (userRole === 'student') {
      return (
        <>
          <button onClick={() => navigate('/courses')}>View Courses</button>
          <button onClick={() => navigate('/schedule')}>View Schedule</button>
        </>
      );
    } else if (userRole === 'admin') {
      return <button onClick={() => navigate('/admin')}>Manage Data</button>;
    } else if (userRole === 'faculty') {
      return <button onClick={() => navigate('/schedule')}>View Faculty Courses</button>;
    }
  };

  return (
    <div>
      <h1>Welcome, {userRole}!</h1>
      {renderOptions()}
    </div>
  );
};

export default Dashboard;
