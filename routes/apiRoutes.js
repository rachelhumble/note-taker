const fs = require("fs");

module.exports = function(app) {
  let notes = require("../Develop/db/db");

  app.get("/api/notes", (req, res) => {
    return res.json(notes);
    // console.log(notes);
  });
  
  app.get("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    let found;
    notes.forEach(n => {
      if (id == n.id){
        found = n;
        return res.json(n)
      }
    })
    return res.json(false)
  })

  app.post("/api/notes", (req, res) => {
    const newNote = req.body;

    if (notes.length === 0){
      newNote.id = 1
    } else {
      newNote.id = (notes[notes.length-1].id + 1);
    }
    notes.push(newNote);
    let jsonNotes = JSON.stringify(notes)
    fs.writeFile("./Develop/db/db.json", jsonNotes, function(err) {
      if (err) {
        return err;
      }
    })
    res.json(true)
  });


  app.delete(`/api/notes/:id`, (req, res) => {
    const id = req.params.id;
    let found;
    notes.forEach(note => {
        if(note === note.id) {
          found = note;
        }
    });
    // res.json(found || { success: false });
  });
};