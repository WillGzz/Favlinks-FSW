const pool = require('../Server/db');

module.exports = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, url } = req.body;
  
    pool.query(
      'UPDATE favlinks SET name = $1, url = $2 WHERE id = $3',
      [name, url, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json({ message: `Link modified with ID: ${id}` });
      }
    );
  };
  