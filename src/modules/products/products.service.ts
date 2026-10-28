import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getProducts() {
    try {
      return await this.productRepository.find({
        select: { id: true, name: true, price: true, stock: true },
      });
    } catch (error) {
      throw error;
    }
  }

  async getProductById(id: number) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException(`Product with id ${id} not found`);
      }
      return product;
    } catch (error) {
      throw error;
    }
  }

  async createProduct(dto: CreateProductDto) {
    try {
      const product = this.productRepository.create(dto);
      return await this.productRepository.save(product);
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(id: number, dto: UpdateProductDto) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException(`Product with id ${id} not found`);
      }
      Object.assign(product, dto);
      return await this.productRepository.save(product);
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id: number) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException(`Product with id ${id} not found`);
      }
      return await this.productRepository.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}
