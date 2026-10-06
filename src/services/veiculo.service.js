import { pool } from "../config/db.js";

class  veiculoServices {

    async getAll() {
        const res = await pool.query(`SELECT * FROM veiculos`);
        return res.rows;
    }

    async create({marca, modelo, placa, ano}) {
        

        const res = await pool.query(
            `INSERT INTO veiculos (marca, modelo, placa, ano) VALUES ($1, $2, $3, $4) RETURNING *`,
            [marca, modelo, placa, ano]
        );

        return res.rows[0];
    }
}

export default new veiculoServices();