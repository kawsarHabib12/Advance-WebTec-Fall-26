import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async getEmployees() {
    try {
      return await this.employeeRepository.find({
        select: { id: true, name: true, email: true },
      });
    } catch (error) {
      throw error;
    }
  }

  async getEmployeeById(id: number) {
    try {
      const employee = await this.employeeRepository.findOne({ where: { id } });
      if (!employee) {
        throw new NotFoundException(`Employee with id ${id} not found`);
      }
      return employee;
    } catch (error) {
      throw error;
    }
  }

  async createEmployee(dto: CreateEmployeeDto) {
    try {
      const employee = this.employeeRepository.create(dto);
      return await this.employeeRepository.save(employee);
    } catch (error) {
      throw error;
    }
  }

  async updateEmployee(id: number, dto: UpdateEmployeeDto) {
    try {
      const employee = await this.employeeRepository.findOne({ where: { id } });
      if (!employee) {
        throw new NotFoundException(`Employee with id ${id} not found`);
      }
      Object.assign(employee, dto);
      return await this.employeeRepository.save(employee);
    } catch (error) {
      throw error;
    }
  }

  async deleteEmployee(id: number) {
    try {
      const employee = await this.employeeRepository.findOne({ where: { id } });
      if (!employee) {
        throw new NotFoundException(`Employee with id ${id} not found`);
      }
      return await this.employeeRepository.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}
