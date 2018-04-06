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
  public options: any;
  public type: any;
  public chartData: any;

  constructor(public cryptoService: CryptoService) {
    this.cryptoService.getBitCoinPriceStats().subscribe((data: any) => {
      this.bitcoinStats = new BitcoinPrice(data);
      this.prices = this.convertPrices();
      this.dates = this.convertDates();
      
      this.type = 'line';
      this.chartData = {
        labels: [...this.dates],
        datasets: [
          {
            label: `Bitcoin (${this.bitcoinStats.unit})`,
            data: [...this.prices],
            backgroundColor: 'rgba(0,0,0, .5)',
            borderColor: '#ccc'
          }
        ]
      };
      this.options = {
        legend: {
          labels: {
            fontColor: 'white'
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(255, 255, 255, 0.3)"
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(255, 255, 255, 0.3)"
            },
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      };

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