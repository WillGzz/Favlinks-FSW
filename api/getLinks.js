const pool = require('../Server/db');

module.exports = (req, res) => {
    pool.query('SELECT * FROM favlinks ORDER BY id ASC', (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    });
  };
  