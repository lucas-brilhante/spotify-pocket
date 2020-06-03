import React from 'react';

import './Dashboard.scss';

const Dashboard = ({ children }) => {
    return (
    <div className="dashboard">
        {children}
    </div>
    );
}

export default Dashboard;

