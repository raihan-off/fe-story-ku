import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
        <ul>
            <li><a href="/">Home</a></li> <br></br>
            <li><a href="/management-story">Management Story</a></li>
        </ul>
        </aside>
    );
};

export default Sidebar;
