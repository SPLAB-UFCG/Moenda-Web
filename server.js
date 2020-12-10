const express = require('express');
const bodyParser = require('body-parser');
const git = require('./frontend/src/services/gitFunctions');
const cors = require('cors');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.post('/', async (req, res) => {
  git.gitClone(req.body.link).then(()=> {
    res.send(
      {moenda: git.moendaExecute()}
    );
   });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

