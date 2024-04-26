const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Diretório público para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'docs')));

app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
});
