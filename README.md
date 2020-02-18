<h1 align="center">Documentação</h1>

# Iniciando api

Instale o [mongdb](https://www.mongodb.com/download-center/community) para usar o banco de dados da API

- Clone esse repositório

```bash
git clone https://github.com/RennanD/noticias.git
```

- Dentro da pasta do projeto, abra o projeto e rode os seguintes comandos:

```bash

npm install
npm dev

```

# Adicionar arquivos na api

## Rota POST [/files]

### Corpo da requisiçao - Multpart/FormData

- use o campo com o nome "file"

# Categoria na api

## Rota de adicionar POST[/categories]

### Corpo da requisição - JSON

- Use o id gerado no upload do arquivo na rota citada acima para fazer o relacionamento com o banner da categoria.

Resquisição:

```json
{
  "name": "Nome da categoria",
  "banner": "id_banner"
}
```

Resposta:

```json
{
  "_id": "5e4bee3f6bfac200ecc33c56",
  "name": "Esporte",
  "banner": "5e4be72b1abd8e07a0232f94",
  "createdAt": "2020-02-18T14:01:35.363Z",
  "updatedAt": "2020-02-18T14:01:35.363Z",
  "__v": 0
}
```

## Rota de Listar GET[/categories]

Resposta:

```json
{
  "_id": "id_categoria",
  "name": "Nome da categoria",
  "banner": {
    "_id": "id_banner",
    "name": "Nome da Imagem",
    "path": "f2b2e310ccaf15302a79baa45e651271.png",
    "createdAt": "2020-02-18T13:31:23.456Z",
    "updatedAt": "2020-02-18T13:31:23.456Z",
    "url": "http://localhost:3001/files/f2b2e310ccaf15302a79baa45e651271.png",
    "__v": 0
  },
  "createdAt": "2020-02-18T13:40:37.935Z",
  "updatedAt": "2020-02-18T13:40:37.935Z",
  "__v": 0
}
```

# Notícias na api

## Rota de adicionar POST[/news]

### Corpo da requisição - JSON

- Use o id gerado na criação da categoria na rota citada acima para fazer o relacionamento com a categoria da notícia.
- Use o id gerado no upload do arquivo fazer o relacionamento com o banner da notícia.

Requisição:

```json
{
  "category": "id_categoria",
  "title": "Time ganha",
  "description": "Time amador ganhar de profissional",
  "author": "author",
  "date": "2020-02-18T10:50:00-03:00",
  "banner": "5e4be72b1abd8e07a0232f94"
}
```

Resposta:

```json
{
  "_id": "id_noticia",
  "category": "id_categoria",
  "title": "Time ganha",
  "description": "Time amador ganhar de profissional",
  "author": "author",
  "date": "2020-02-18T13:50:00.000Z",
  "banner": "id_banner",
  "createdAt": "2020-02-18T14:01:38.542Z",
  "updatedAt": "2020-02-18T14:01:38.542Z",
  "__v": 0
}
```

## Rota de Listar GET[/news]

Resposta:

```json
{
  "_id": "id_noticia",
  "category": {
    "_id": "id_categoria",
    "name": "Esporte",
    "banner": "id_banner",
    "createdAt": "2020-02-18T14:01:01.134Z",
    "updatedAt": "2020-02-18T14:01:01.134Z",
    "__v": 0
  },
  "title": "Time ganha",
  "description": "Time amador ganhar de profissional",
  "author": "author",
  "date": "2020-02-18T13:50:00.000Z",
  "banner": {
    "_id": "id_banner",
    "name": "Captura de Tela (56).png",
    "path": "f2b2e310ccaf15302a79baa45e651271.png",
    "createdAt": "2020-02-18T13:31:23.456Z",
    "updatedAt": "2020-02-18T13:31:23.456Z",
    "url": "http://localhost:3001/files/f2b2e310ccaf15302a79baa45e651271.png",
    "__v": 0
  },
  "createdAt": "2020-02-18T14:01:38.542Z",
  "updatedAt": "2020-02-18T14:01:38.542Z",
  "__v": 0
}
```
