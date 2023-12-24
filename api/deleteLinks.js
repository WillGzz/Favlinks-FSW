const pool = require('../Server/db');

module.exports = (req, res) => {
    const id = parseInt(req.params.id);
  
    pool.query('DELETE FROM favlinks WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User deleted with ID: ${id}`);
    });
  };
  