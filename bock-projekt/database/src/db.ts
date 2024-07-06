// db.ts
import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri: string = process.env.MONGOURI!;
const client = new MongoClient(uri);
let dbs: { [key: string]: Db } = {};

/**
 * Establishes a connection to the MongoDB server.
 * @param {string} database - The name of the database to connect to.
 * @returns {Promise<Collection>} - The collection to perform operations on.
 */
async function getDB(database: string): Promise<Collection> {
    if (!dbs[database]) {
        await client.connect();
        dbs[database] = client.db(database);
    }
    return dbs[database].collection('data');
}

/**
 * Writes a record to the database.
 * @param {string} database - The database to write to.
 * @param {ObjectId} id - The ID of the new record.
 * @param {any} data - The data to be written.
 * @returns {Promise<void>}
 */
export async function writeToDB(database: string, id: ObjectId, data: any): Promise<void> {
    const collection = await getDB(database);
    await collection.updateOne({ _id: id }, { $set: data }, { upsert: true });
}

/**
 * Gets a new ObjectId for the database.
 * @returns {ObjectId} - New ObjectId.
 */
export function getID(): ObjectId {
    return new ObjectId();
}

/**
 * Gets the first element from the database that matches the parameters.
 * @param {string} database - The database to refer to.
 * @param {string} field - The field to filter by.
 * @param {string} val - The filter value to check for.
 * @returns {Promise<any>} - The element returned from the database.
 */
export async function getFirstFromDB(database: string, field: string, val: string): Promise<any> {
    const collection = await getDB(database);
    return await collection.findOne({ [field]: val });
}

/**
 * Gets an element from the database by ID.
 * @param {string} database - The database to refer to.
 * @param {ObjectId} id - The ID to return.
 * @returns {Promise<any>} - The element returned from the database.
 */
export async function getFromDB(database: string, id: ObjectId): Promise<any> {
    const collection = await getDB(database);
    return await collection.findOne({ _id: id });
}

/**
 * Deletes an element from the database by ID.
 * @param {string} database - The database to refer to.
 * @param {ObjectId} id - The ID to delete.
 * @returns {Promise<void>}
 */
export async function deleteFromDB(database: string, id: ObjectId): Promise<void> {
    const collection = await getDB(database);
    await collection.deleteOne({ _id: id });
}

export { ObjectId };
