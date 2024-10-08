import { Brand } from './brand.model';
import { ProductAccessory } from './product-accessory.model';

export class Accessory {
  accessoryId?: number;
  name?: string;
  description?: string;
  brand?: Brand;
  category?: AccessoryCategory; // Ensure you define AccessoryCategory
  productAccessories?: ProductAccessory[];
  imageUrl?: string; // New property for image URL
  price?: number;
  createdOn?: Date;
  visitCount?: number;

}

export enum AccessoryCategory {
    BIKE_PARTS = 'BIKE_PARTS',
    RIDING_GEARS = 'RIDING_GEARS',
    LUGGAGE_AND_TOURING = 'LUGGAGE_AND_TOURING',
    HELMETS_AND_COMBOS = 'HELMETS_AND_COMBOS'
}
