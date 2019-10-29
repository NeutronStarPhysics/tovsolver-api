// eslint-disable-next-line
import { Request, Response, Application } from 'express';
import EoSService from '../services/eos.service';

export default class EoSRouter {
  private app: Application;

  private service: EoSService;

  constructor(app: Application) {
    this.app = app;
    this.service = new EoSService('EoSService');
    this.setRoutes();
  }

  public setRoutes() {
    this.app.route('/eos').get((req: Request, res: Response) => {
      const body = JSON.stringify(this.service.listEoS());
      return res.status(200).send(body);
    });
  }
}
