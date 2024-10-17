export interface ProductDto {
    name: string;
    description?: string;  // Opcional si es necesario
    price: number;
  }
  
  export class ProductDto {
    constructor(data: ProductDto) {
      this.name = data.name;
      this.description = data.description || '';  // Valor predeterminado si es opcional
      this.price = data.price;
    }
  
    // Método para convertir a un objeto plano si es necesario
    toPlainObject(): Partial<ProductDto> {
      return {
        name: this.name,
        description: this.description,
        price: this.price,
      };
    }
  }
  