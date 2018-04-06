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

  constructor(public cryptoService: CryptoService) {
    this.cryptoService.getBitCoinPriceStats().subscribe((data: any) => {
      this.bitcoinStats = new BitcoinPrice(data);
      this.prices = this.convertPrices();
    });
  }

  public convertPrices(): number[] {
    const prices = this.bitcoinStats.values.map((coordinates: PriceCoordinates) => {
      return Number((coordinates.y).toFixed(2));
    });

    return prices;
  }
}