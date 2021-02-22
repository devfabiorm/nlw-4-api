import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World - NLW#4'});
});

app.post('/', (request, response) => {
  return response.json({ message: 'Seus dados foram enviados com sucesso!'});
});


app.listen(3333, () => console.log("Server is running"));