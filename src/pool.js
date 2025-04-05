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
    // return this._pool.query("SELECT 1 + 1 AS result"); //For Test connection
  }
  close() {
    return this._pool.end();
  }
  // It has a big security issues
  query(sql) {
    return this._pool.query(sql);
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
