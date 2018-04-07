import { Component, Input } from '@angular/core';
import { CryptoCurrency } from './../models/crypto-currency.class';


@Component({
  selector: 'crypto-filter',
  templateUrl: './crypto-filter.component.html',
  styleUrls: ['./crypto-filter.component.css']
})
export class CryptoFilterComponent {
  @Input() public cryptos: CryptoCurrency[];
  public filteredCryptos: CryptoCurrency[];
  public percentChange: string = 'All';

  public percentChangeFilter(): void {
   this.filteredCryptos = this.cryptos.filter((crypto: CryptoCurrency) => {
      if (this.percentChange === 'Positive') {
        return crypto.percent_change_24h >= 0; //return all positive values
      } else if (this.percentChange === 'Negative') {
        return crypto.percent_change_24h < 0;
      }
      return crypto;
   });
  }
}