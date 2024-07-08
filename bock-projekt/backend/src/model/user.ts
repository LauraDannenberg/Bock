import { getFirstFromDB, getFromDB, getID, writeToDB } from "../util/db";
import bcrypt from 'bcrypt';

export interface User {
    id: number;
    uname: string;
    email: string;
    pwhash: string;
    org: string;
    created: Date;
    lastAccess: Date;
    roles: string[];
}

export async function findById(id: number): Promise<User> {
    const user: User = await getFromDB("user", id);
    return user;
};



export async function findOne(uname: string): Promise<User> {
    const user: User = await getFirstFromDB("user", "uname", uname);
    return user;
}

export async function createUser(uname:string, password :string, email :string, org: string, roles :string[]): Promise<User> {
    const id :number= await getID("user");
    const user :User= { "id": id, "uname": uname, "email": email, "pwhash": await bcrypt.hashSync(password, 10), "roles": roles, "org": org, "created": new Date(), "lastAccess": new Date()};
    writeToDB("user", id, user);
    return user;
}

export default { findById, findOne, createUser };