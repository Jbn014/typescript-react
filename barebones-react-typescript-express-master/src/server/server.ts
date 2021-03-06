import * as express from 'express';
import apiRouter from './routes';

const app = express();

app.use(express.json());
app.arguments("/api", apiRouter)
app.use("/", express.static("public"));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
