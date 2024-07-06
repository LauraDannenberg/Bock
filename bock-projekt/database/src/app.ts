// server.ts
import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { writeToDB, getID, getFirstFromDB, getFromDB, deleteFromDB } from './db';

const app = express();
const port = 6700;

app.use(express.json());

app.post('/create', async (req: Request, res: Response) => {
    const database = req.body.database;
    const data = req.body.data;
    console.log(req.body)

    if (!database || !data) {
        return res.status(400).send('Missing database or data');
    }

    const id = getID();
    await writeToDB(database, id, data);

    res.send({ id, message: 'Data inserted successfully' });
});

app.get('/read/:database/:id', async (req: Request, res: Response) => {
    const database = req.params.database;
    const id = new ObjectId(req.params.id);
    console.log(database, id)

    const data = await getFromDB(database, id);

    if (!data) {
        return res.status(404).send('Data not found');
    }

    res.send(data);
});

app.put('/update/:database/:id', async (req: Request, res: Response) => {
    const database = req.params.database;
    const id = new ObjectId(req.params.id);
    const data = req.body.data;

    if (!data) {
        return res.status(400).send('Missing data');
    }

    await writeToDB(database, id, data);

    res.send({ message: 'Data updated successfully' });
});

app.delete('/delete/:database/:id', async (req: Request, res: Response) => {
    const database = req.params.database;
    const id = new ObjectId(req.params.id);

    await deleteFromDB(database, id);

    res.send({ message: 'Data deleted successfully' });
});

app.get('/search/:database', async (req: Request, res: Response) => {
    const database = req.params.database;
    const field = req.query.field as string;
    const value = req.query.value as string;

    console.log("database:", database, " | field:", field,  " | value:",value);

    if (!field || !value) {
        return res.status(400).send('Missing field or value');
    }

    const data = await getFirstFromDB(database, field, value);

    if (!data) {
        return res.status(404).send('Data not found');
    }

    res.send(data);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
