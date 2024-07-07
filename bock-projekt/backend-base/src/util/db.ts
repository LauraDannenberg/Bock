import JSONdb from "simple-json-db";
import fs from 'fs';

const base: string = "./"
let dbs = {};


/**
 * Schreibt einen Datensatz in die Datenbanl
 * @param {string} database - Die Datenbank in die geschrieben wird.
 * @param {number} id - die ID des neuen Datensatz
 * @returns {void}
 */
export async function writeToDB(database: string, id: number, data: any) :Promise<void>{
    const db = await getDB(database);
    db.set(0, await db.get(0) + 1);
    db.set(id, JSON.stringify(data));
    db.sync();
}

/**
 * Eine neue ID für die Datenbank erhalten
 * @param {string} database - Die Datenbank für die eine neue ID benötigt wird.
 * @returns {number} - neue ID
 */
export async function getID(database: string) {
    const db = await getDB(database);
    let id = 1;
    if (!db.get(0)) {
        db.set(0, 1);
    } else {
        id = db.get(0);
    }
    return id;
}

export async function getFirstFromDB(database: string, field: string, val: string) :Promise<any>{ 
    const db = await getDB(database);
    const count = db.get(0);

    for(let i=0; i<count; i++){
        const dat = JSON.parse(db.get(i));
        //console.log("checking the field: ",field);
        const fieldval = dat.uname;
        //console.log("dat: ",dat);
        //console.log("fieldval: ",fieldval);
        if(fieldval === val){
            return dat;
        }
    }
    return null;
}

export async function getFromDB(database: string, id: number) : Promise<any>{
    const db = await getDB(database);
    if (db.has(id)) {
        return db.get(id);
    } else {
        return null;
    }
}

function getDB(nam: string) : Promise<any> {
    const fp = base + nam + ".json";
    if (!fs.existsSync(fp)) {
        fs.writeFileSync(fp, '');
    }
    if (dbs[nam] == null) {
        dbs[nam] = new JSONdb(fp);
    }
    return dbs[nam];
}