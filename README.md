<h1 align="center">
<br>
  a simple crud app
<br>
<br>

</h1>

<p align="center">A  API made with Node, Postgres, Sequelize.</p>

<hr />

## Introduction

This API made in node with Postgres using sequelize (orm) and sequelize-cli

- associations

1 User have N post
1 post have 1 user

1 Post have N Categories
1 Categories have N Post

    The BelongsTo association
    The HasMany association
    The BelongsToMany association

## Model Structure

      src
      ├── config
      │ ├── index.js
      │ └── sequelizeconfig.js
      ├── controllers
      │ ├── articleController.js
      │ ├── commentController.js
      │ └── userController.js
      ├── database
      │ └── migrations
      │ └── 20200211043305-create-users.js
      ├── index.js
      ├── models
      │ ├── article.js
      │ ├── categoryGroup.js
      │ ├── category.js
      │ ├── comment.js
      │ ├── index.js
      │ ├── reply.js
      │ ├── tag.js
      │ └── user.js
      ├── routes
      │ ├── article.js
      │ ├── comment.js
      │ ├── index.js
      │ └── user.js
      └── server.js

<br>

## Commands

- `npm start` - start the port at `http://localhost:6060`

## License

MIT license, Copyright (c) 2020 Alfred Rodriguez.
