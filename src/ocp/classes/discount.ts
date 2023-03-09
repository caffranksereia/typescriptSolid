export abstract class Discount {
  abstract calculate(value: number): number;
}

export class SixtyPercentDiscount extends Discount {
  private readonly discount = 0.6;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FortyPercentDiscount extends Discount {
  private readonly discount = 0.4;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class ThirtyPercentDiscount extends Discount {
  private readonly discount = 0.3;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TwentyPercentDiscount extends Discount {
  private readonly discount = 0.2;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
