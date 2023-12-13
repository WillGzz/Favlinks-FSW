const Pool = require("pg").Pool;

const pool = new Pool({
  user: "username",
  host: "localhost",
  database: "favlinks",
  password: "password",
  port: 5432,
});
 //request, response

  //Create links
  const createLinks = (req, res) => {
    const { name, url } = req.body;
  
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
 const getLinks = (req, res) => {
    pool.query('SELECT * FROM favlinks ORDER BY id ASC', 
    
    (error, result) => {
    if (error) {
    throw error
    }
    res.status(200).json(result.rows)
    })
    }


  


module.exports = {
    getLinks,
    createLinks
    }