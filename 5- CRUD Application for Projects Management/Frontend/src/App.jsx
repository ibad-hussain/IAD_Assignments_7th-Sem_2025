import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:5000/projects';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate Project ID is a number
    if (isNaN(projectId)) {
      alert("Project ID must be a number.");
      return;
    }

    // Validate Project ID uniqueness when adding
    if (!isEditing && projects.some(p => p.projectId === projectId)) {
      alert("Project ID must be unique.");
      return;
    }

    // Validate Project Name length
    if (projectName.trim().length < 3) {
      alert("Project name must be at least 3 characters.");
      return;
    }

    if (isEditing) {
      await fetch(`${API_URL}/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectName })
      });
    } else {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, projectName })
      });
    }

    setProjectId('');
    setProjectName('');
    setIsEditing(false);
    const updated = await fetch(API_URL).then(res => res.json());
    setProjects(updated);
  };

  const handleEdit = (project) => {
    setProjectId(project.projectId);
    setProjectName(project.projectName);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    const updated = await fetch(API_URL).then(res => res.json());
    setProjects(updated);
  };

  return (
    <div className="container">
      <h1>Projects Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Project ID"
          value={projectId}
          onChange={e => setProjectId(e.target.value)}
          required
          disabled={isEditing}
        />
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          required
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'} Project</button>
      </form>

      <ul className="project-list">
        {projects.map(p => (
          <li key={p.projectId}>
            <strong>{p.projectId}</strong>{p.projectName}
            <div>
              <button className="edit-btn" onClick={() => handleEdit(p)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(p.projectId)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
