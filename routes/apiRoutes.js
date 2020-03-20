const fs = require("fs");

module.exports = function(app) {
  let notes = require("../Develop/db/db.json");

  app.get("/api/notes", (req, res) => {
    return res.json(notes)
  })

  console.log(notes);
  
  app.get("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    let found;
    notes.forEach(note => {
      if (id == note.id){
        found = note;
        return res.json(note)
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
    let json = JSON.stringify(notes)
    fs.writeFile("./Develop/db/db.json", json, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Note added!");
    })
    res.json(true)
  })

//Still working on this feature:
  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    // let found;
    notes.forEach((n, index) => {
      if(id == n.id){
        notes.splice(index,1)
        const notesCopy = notes.slice();
        let json = JSON.stringify(notesCopy)
        fs.writeFile(".Develop/db/db.json", json, function(err) {
          if (err) {
            return console.log(err);
          }
          console.log("Note deleted!");
        })

      }
    })
    res.json(true);
  })
};