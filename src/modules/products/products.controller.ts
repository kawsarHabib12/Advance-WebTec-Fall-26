import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts() {
    return await this.productsService.getProducts();
  }

  @Get(":id")
  async getProductById(@Param("id") id: string) {
    return await this.productsService.getProductById(+id);
  }

  @Post()
  async createProduct(@Body() dto: CreateProductDto) {
    return await this.productsService.createProduct(dto);
  }

  @Patch(":id")
  async updateProduct(@Param("id") id: string, @Body() dto: UpdateProductDto) {
    return await this.productsService.updateProduct(+id, dto);
  }

  @Delete(":id")
  async deleteProduct(@Param("id") id: string) {
    return await this.productsService.deleteProduct(+id);
  }
}
