export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity: number; // or any other property you might need
    totalPrice?: number; // Optional if you want to calculate it dynamically
    updateQuantity?: (newQuantity: number) => void; // Optional method for updating quantity
  }
  