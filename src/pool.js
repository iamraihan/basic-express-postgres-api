const pg = require("pg");

class Pool {
  /**
   * @private
   * @type {import('pg').Pool | null}
   */
  _pool = null;

  /**
   * @param {import('pg').PoolConfig} options
   */
  connect(options) {
    this._pool = new pg.Pool(options);
  }
}
module.exports = new Pool();
//* NORMALLY we create pool like this way
/*const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "social-repo",
  user: "postgres", // your username
  password: "postgres", // your password
});

module.exports = pool;
*/
