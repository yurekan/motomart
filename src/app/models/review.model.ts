import { User } from './user.model';
import { Product } from './product.model';

export class Review {
  reviewId?: number;
  user?: User;
  product?: Product;
  rating?: number;
  comment?: string;
  reviewDate?: string;
}
