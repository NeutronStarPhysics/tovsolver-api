import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import * as cors from 'cors';

import EoSRouter from './routes/eos.router';

const app = express();

const {
  PORT = 3000,
} = process.env;


const eosRouter =  new EoSRouter(app);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});

if (require.main === module) { // true if file is executed
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}
export default app;
