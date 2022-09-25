const pool = require('./../config/connection');

class Reflection {
    static async addReflection(succes, low_point, take_away, owner_id) {
        const query = "INSERT INTO reflections (succes, low_point, take_away, owner_id, created_date, modified_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, succes, low_point, take_away, owner_id, created_date, modified_date";
        const values = [succes, low_point, take_away, owner_id, new Date(), new Date()]
        try {
            const res = await pool.query(query, values)
            const data = res.rows[0];
            return {
                "data": data,
                "succeed": true
            }
        } catch (err) {
            return {err}
        }
    }
    static async getReflections(owner_id){
        const query = "SELECT succes, low_point, take_away, created_date, modified_date FROM reflections WHERE owner_id=$1";
        const values = [owner_id];
        try {
            const res = await pool.query(query, values);
            return {
                "data": res.rows,
                "succeed": true
            };
        } catch (error) {
            next(error);
        }

    }

}
module.exports = Reflection;
