import { PriceCoordinates } from './price-coordinates.interface';

export class BitcoinPrice {
  public status: string;
  public name: string;
  public unit: string;
  public period: string ;
  public description: string;
  public values: PriceCoordinates[]; 

  constructor(data?: any) { //taking data of any type
    const defaults = {
      values: [],
      ...data
    };

    //if a new value comes in, it is going to overwrite the value and then set it
    this.description = defaults.description;
    this.name = defaults.name;
    this.unit = defaults.unit;
    this.period = defaults.period;
    this.description = defaults.description;
    this.values = defaults.values;
  }
}