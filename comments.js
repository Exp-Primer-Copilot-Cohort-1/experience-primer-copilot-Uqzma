//create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//create a comment array
const comments = [
    {id: 1, author: 'John', text: 'Hello!'},
    {id: 2, author: 'Mary', text: 'Good morning!'},
    {id: 3, author: 'Jane', text: 'Good evening!'}
];
//get all comments
app.get('/api/comments', (req, res) => {
    res.json(comments);
});
//get a comment by id
app.get('/api/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});
//create a new comment
app.post('/api/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,