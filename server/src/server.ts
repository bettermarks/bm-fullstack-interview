import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import { activity3, activity1, activity2, activity4, activity5, Frauke, Oleg } from "./data";

const app = express();

const port = 5000;

// Enables us to use req.json inside request handlers...
//...to get the request body as JSON
app.use(bodyParser.json());

app.get('/v1.0/activity/all', (req: Request, res: Response) => { 
    res.status(200);
    res.send([activity1, activity2, activity3, activity4, activity5])
})

app.get('/v1.0/student/all', (req: Request, res: Response) => {
    res.status(200);
    res.send([Frauke, Oleg]);
})

app.listen(
    port,
    () => console.log(`Server listening at http://localhost:${port}`)
)