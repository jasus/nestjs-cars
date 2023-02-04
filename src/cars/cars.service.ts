import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from './dto';

import { v4 as uuid } from 'uuid';
import { Car } from './interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Seat',
      model: 'Ateca',
    },
    {
      id: uuid(),
      brand: 'Renault',
      model: 'Austral',
    },
    {
      id: uuid(),
      brand: 'Kia',
      model: 'Niro',
    },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (car === undefined) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }

    return car;
  }

  createCar(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB: Car;
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...car,
          ...updateCarDto,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  deleteCar(id: string) {
    this.cars = this.cars.filter((car) => car.id !== id);

    return this.cars;
  }
}
