import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Seat',
      model: 'Ateca',
    },
    {
      id: 2,
      brand: 'Renault',
      model: 'Austral',
    },
    {
      id: 3,
      brand: 'Kia',
      model: 'Niro',
    },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (car === undefined) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }

    return car;
  }
}
