const AuthorController = require('../controllers/authors.controller');
module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.getAuthors);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);




}

