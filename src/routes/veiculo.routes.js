import express from "express";
import veiculoService from "../services/veiculo.service.js"

const veiculoRouter = express.Router();

veiculoRouter.get("/", async (req, res) => {
    const veiculos = await veiculoService.getAll();
    return res.json(veiculos);
});

veiculoRouter.post("/", async (req, res) => {
    const veiculo = await veiculoService.create(req.body);
    return res.status(201).json(veiculo);
});

export default veiculoRouter;