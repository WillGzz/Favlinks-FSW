const pool = require('../Server/db');

module.exports = (req, res) => {
    const { name, url } = req.body;
  
    pool.query(
      "INSERT INTO favlinks (name, url) VALUES ($1, $2) RETURNING *", [name, url],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).send(`User added with ID: ${results.rows[0].id}`);
      }
    );
  };