interface ICart {
  menuId?: string;
  quantity: number;
  notes?: string;
  menuItem?: IMenuItem;
  name?: string;
}

interface IMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_available: boolean;
  created_at?: Date;
}

interface IOrder {
  id: string;
  customer_name: string;
  table_number: number;
  cart: ICart[];
  status: "PENDING" | "COMPLETE" | "PROCESSING";
  total: number;
  created_at?: Date;
  updated_at?: Date;
}

export type { IOrder, ICart, IMenuItem };
