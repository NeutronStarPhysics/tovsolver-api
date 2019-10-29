export enum EosElementType {
  PRESSURE = 'Pressure',
  ENERGY = 'Energy'
}

export interface EoSElement {
  value: number;
  type: EosElementType;
}
