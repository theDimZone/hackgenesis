import { Factors } from './factors';

export class Offer {
  public name: string;
  public market_name: string;
  public description: string;
  public type: string; // stock/bond
  public logo: string; // logo image
  public possible_profit: number; // in procent
  public possible_loss: number; // in procent
  public price: number; // roubles for 1 piece

  public required_factors: Factors;
}
