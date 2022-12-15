export interface ProductsType {
    productItems: ProductItemType[];
    isLoading: boolean;
}

export interface CartType {
    cartItems: CartItemType[];
    totalAmount: number;
    totalPrice: number;
}

export interface ProductItemType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export interface CartItemType extends ProductItemType {
    amount: number;
}

