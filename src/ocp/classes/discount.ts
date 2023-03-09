export abstract class Discount {
  protected discount: number;
  abstract calculate(value: number): number;
}

export class SixtyPercentDiscount extends Discount {
  protected readonly discount = 0.6;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FortyPercentDiscount extends Discount {
  protected readonly discount = 0.4;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class ThirtyPercentDiscount extends Discount {
  protected readonly discount = 0.3;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TwentyPercentDiscount extends Discount {
  protected readonly discount = 0.2;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends Discount {}
