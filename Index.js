const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configura o Express para servir arquivos estáticos da pasta "images"
app.use('/images', express.static(path.join(__dirname, 'images')));

// Rota para retornar a imagem
app.get('/cantada', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'cantada.jpg'));
});

// Rota padrão
app.get('/', (req, res) => {
  res.send('API Node.js funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});