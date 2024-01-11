require('dotenv').config();  // we import the env variables and apply them
//we use environment variables to keep sensitive information hidden
//we also set the env variables on the vercel settings, this file is not included in our commit

const Pool = require("pg").Pool;
//pool is used to establish a connection to the PostgreSQL server and create a pool of connections that can be reused by multiple clients.
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
/*
const pool = new Pool({
  user: "username",
  host: "localhost",
  database: "linksapi",
  password: "password",
  port: 5432,
});
*/
 //request, response

  //Create links
  const createLinks = (request, response) => {
    const { name, url } = request.body;
  
    pool.query(
      "INSERT INTO favlinks (name, url) VALUES ($1, $2) RETURNING *", [name, url],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`User added with ID: ${results.rows[0].id}`);
      }
    );
  };


//Retrieve information from the table
 const getLinks = (request, response) => {
    pool.query('SELECT * FROM favlinks ORDER BY id ASC', 
    
    (error, result) => {
    if (error) {
    throw error
    }
    response.status(200).json(result.rows)
    })
    }

//Update information from the table
   const updateLinks = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, url } = request.body

  pool.query(
    'UPDATE favlinks SET name = $1, url = $2 WHERE id = $3',
    [name, url, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json({ message: `Link modified with ID: ${id}` });
    }
  )
}


  //Delete information from the table 
  const deleteLinks = (request, response) => {
  const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM favlinks WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
  
  

//Allow us to export the functions we made into other files, in this case its index.js
module.exports = {
    createLinks,
    getLinks,
    updateLinks,
    deleteLinks,
    Pool
    }