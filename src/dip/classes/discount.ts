export abstract class Discount {
  //based class
  protected discount = 0;
  abstract calculate(value: number): number;
}

export class SixtyPercentDiscount extends Discount {
  protected readonly discount = 0.6;
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class FortyPercentDiscount extends Discount {
  protected readonly discount = 0.4;
}

export class ThirtyPercentDiscount extends Discount {
  protected readonly discount = 0.3;
}

export class TwentyPercentDiscount extends Discount {
  protected readonly discount = 0.2;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
