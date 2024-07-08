import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get('/test', (req, res, next) => {
    res.send("whoop, you didn't need authentication");
});

router.get('/pub', (req, res, next) => {
    res.render('index');
});

export default router;