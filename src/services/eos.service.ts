export default class EoSService {
  private readonly serviceName: string;

  constructor(serviceName: string) {
    this.serviceName = serviceName;
  }

  public listEoS(): any {
    return [
      {
        name: 'Sirius',
        radius: 123,
        serviceName: this.serviceName,
      },
      {
        name: 'Sun',
        radius: 600,
        serviceName: this.serviceName,
      },
    ];
  }
}
