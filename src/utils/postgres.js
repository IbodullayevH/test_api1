const {Pool} = require(`pg`)
require(`dotenv`).config()


let pool = new Pool({
  connectionString: process.env.URL,
    ssl: require
});

// fetch_data logic
const fetch_data = async (query, ...params) => {
  let client = await pool.connect();
  
  try {
    let { rows } = await client.query(query, params.length ? params : null);
    return rows;
  } catch (error) {
    console.error("Errror fetch dataniki", error);
  }finally {
    client.release();
  }
};

// export
module.exports = fetch_data


