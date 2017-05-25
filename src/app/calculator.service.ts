import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  calculate(f: number, N: number, c: number): number {
    const result = Math.round((Math.pow(f, 2) / (N * c)) + f);
    return result;
  }

}
