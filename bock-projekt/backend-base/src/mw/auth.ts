import { Request, Response, NextFunction } from 'express';
import { User } from '../model/user'
/**
 * Prüft ob der nutzer authentifiziert ist
 * @param req Request
 * @param res Response
 * @param next next function
 * @returns next function -> Nächster Schritt wird eingeleitet
 */
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/login');
}

/**
 * Prüft, ob der nutzer die Rolle "admin" innehat, im Array Roles im Nutzerobjekt
 * @param req Request
 * @param res Response
 * @param next next-function
 */
export async function isAdmin(req: Request, res: Response, next: NextFunction) {
    let usr = await req.user;
    if (usr != null) {
        let jusr = JSON.parse(usr.toString());
        if (jusr.roles != null) {
            let suc = false;
            await jusr.roles.forEach((elem: string) => {
                if (elem === "admin") {
                    suc = true;
                    return next();
                }
            });
            if(!suc){
                res.send("not admin");
            }
        }
    }
}

export default { isAuthenticated, isAdmin };