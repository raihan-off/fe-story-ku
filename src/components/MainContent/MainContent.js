import React, { useEffect, useState } from "react";
import axios from "axios";
import './MainContent.css';

const MainContent = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/home/story-list");
            console.log(response.data);
            if (Array.isArray(response.data)) {
                setData(response.data);
            } else {
                console.error("Data received is not an array:", response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
    }, []);

    const handleEdit = (id) => {
        console.log("Edit button clicked for id:", id);
    };

    const handleDelete = (id) => {
        console.log("Delete button clicked for id:", id);
    };

    return (
        <div className="main-content">
            <h2>List Story</h2>
            <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Tags</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.category}</td>
                <td>{item.tags.join(", ")}</td>
                <td>{item.status}</td>
                <td>
                    <button className="action-button" onClick={() => handleEdit(item.id)}>
                    Edit
                    </button>
                    <button className="action-button" onClick={() => handleDelete(item.id)}>
                    Delete
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
};

export default MainContent;
