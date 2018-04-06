import { PriceCoordinates } from './../models/price-coordinates.interface';
import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { BitcoinPrice } from '../models/bitcoin-price.class';

@Component({
  selector: 'bitcoin-stats',
  templateUrl: './bitcoin-stats.component.html',
  styleUrls: ['./bitcoin-stats.component.css']
})
export class BitcoinStatsComponent {
  public bitcoinStats: BitcoinPrice = new BitcoinPrice();
  public prices: number[];
  public dates: string[];

  constructor(public cryptoService: CryptoService) {
    this.cryptoService.getBitCoinPriceStats().subscribe((data: any) => {
      this.bitcoinStats = new BitcoinPrice(data);
      this.prices = this.convertPrices();
      this.dates = this.convertDates();
      console.log(this.dates);
    });
  }

  public convertDates(): string[] {
    const dates = this.bitcoinStats.values.map((coordinates: PriceCoordinates) => {
      const rawDate = new Date(coordinates.x * 1000);

      return `${rawDate.getMonth()}/${rawDate.getDay()}/${rawDate.getFullYear()}`;

    });

    return dates;
  }

  public convertPrices(): number[] {
    const prices = this.bitcoinStats.values.map((coordinates: PriceCoordinates) => {
      return Number((coordinates.y).toFixed(2));
    });

    return prices;
  }
}