const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;
const DATA_FILE = './projects.json';

app.use(cors());
app.use(express.json());

// Read all projects
app.get('/projects', (req, res) => {
    const data = fs.readFileSync(DATA_FILE);
    res.json(JSON.parse(data));
});

// Create new project
app.post('/projects', (req, res) => {
    const { projectId, projectName } = req.body;
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    data.push({ projectId, projectName });
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ message: 'Project added' });
});

// Update project
app.put('/projects/:projectId', (req, res) => {
    const { projectId } = req.params;
    const { projectName } = req.body;
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    const index = data.findIndex(p => p.projectId === projectId);
    if (index !== -1) {
        data[index].projectName = projectName;
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        res.json({ message: 'Project updated' });
    } else {
        res.status(404).json({ message: 'Project not found' });
    }
});

// Delete project
app.delete('/projects/:projectId', (req, res) => {
    const { projectId } = req.params;
    let data = JSON.parse(fs.readFileSync(DATA_FILE));
    data = data.filter(p => p.projectId !== projectId);
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ message: 'Project deleted' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
