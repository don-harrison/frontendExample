export namespace app{
    class ROLES {
        name: string;
        length: number;
        extras?: string[];
      }

    interface ProductData {
      productId: string, 
      price: number,
      location: string
    }

    interface CustomerData {
      customerId: string,
      name: string,
      address: string,
      phoneNumber: string,
      email: string
    }

    interface InventoryData {
      productId: string, 
      price: number,
      location: string,
      stock: number
    }
}