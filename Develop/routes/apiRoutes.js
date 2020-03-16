const notes = require("../db/db");

module.exports = function(app) {
  app.get("/api/notes", (req, res) => {
    const notes = req.params.note;
    console.log(note);

  });

  app.post("/api/notes", (req, res) => {
    const newNote = req.body;

    newNote.routeName = req.body.name.split(" ").join("").toLowerCase();
    notes.push(newNote);
    res.json(newNote);
  });

  app.delete(`/api/notes/:id`, (req, res) => {

    let found;
    notes.forEach(note => {
        if(note === note.id) {
          found = note;
        }
    });
    // res.json(found || { success: false });
  });
};