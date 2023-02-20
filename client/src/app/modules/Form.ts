export interface Register {
    username: string;
    password: string;
    phone: string;
    email: string;
    root?: Boolean;
    address: string;
}

export interface Login {
    username: string;
    password: string;
}

export interface Product {
    name: string;
    details: string;
    price: number;
    stockMin: number;
    stockMax: number;
    stock: number;
  }