import React from 'react';
import './Dashboard.scss';

const Dashboard = ({ children }) => {
    return (
    <div className="dashboard" style={{paddingBottom:93}}>
        {children}
    </div>
    );
}

export default Dashboard;

