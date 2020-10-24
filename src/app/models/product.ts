import { Offer } from './offer';
import { Factors } from './factors';

export class Product {
  public name: string;
  public description: string;
  public possible_profit: number; // in procent
  public possible_loss: number; // in procent
  // ?? public price: number; // roubles for 1 piece

  public required_factors: Factors;
  public offers: Offer[];
}
