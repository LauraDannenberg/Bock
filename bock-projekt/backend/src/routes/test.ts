import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get('/test', (req, res, next) => {
    res.send("whoop, you're authenticated!");
});

export default router;