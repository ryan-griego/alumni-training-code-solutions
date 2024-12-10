import express from 'express';

const app = express();

let nextId: number = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};

const parseJson = express.json();

app.use(parseJson);

app.get('/api/grades', (req, res) => {
  const gradesArray = Object.values(grades);
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const newGrade: Grade = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score,
  };

  grades[nextId] = newGrade;
  nextId++;
  res.status(201).send(newGrade);
});

app.listen(8080, function () {
  console.log('Server is running on 8080');
});
