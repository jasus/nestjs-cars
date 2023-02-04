import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  getAllCars() {
    return ['Seat', 'Renault', 'Kia'];
  }
}
