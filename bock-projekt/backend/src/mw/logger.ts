import { Request, Response, NextFunction } from 'express';
import { getID, writeToDB } from '../util/db';

export async function logRequest(req: Request, res: Response, next: NextFunction) {
    const data = { url: req.originalUrl, body: req.body, headers: req.rawHeaders };
    writeToDB("log", await getID("log"), data);
    next();
}