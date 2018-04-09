import { CryptoCurrency } from './../models/crypto-currency.class';
import { CryptoService } from './../services/crypto.service'; // in order to use- add to the class constructor
import { Component } from '@angular/core';


@Component({
  selector: 'crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.css']
})
export class CryptoTableComponent {

  public top100Cryptos: CryptoCurrency[]; //assign it (CryptoCurrency) as a type
  public filteredCryptos: CryptoCurrency[];
  public sortValues: any = { rank: false, marketCap: false, volume: false, change24: false, price: false, name: false };//keeping track of what our values are in the header (descending/ascending)
  public priceUnit: string = 'USD';

  constructor(public cryptoService: CryptoService) {
    this.getTop100Cryptos();
  }

  public getTop100Cryptos(): void {
    this.cryptoService.getAllCryptos().subscribe((data: any) => {
      this.top100Cryptos = data.map((element: any) => {
        return new CryptoCurrency(element);
      });
      this.filteredCryptos = this.top100Cryptos;
    });
  }

  public listenFilterCryptos(e: CryptoCurrency[]) {
    this.filteredCryptos = e;
  }

  public listenPriceUnit(e: string) {
    this.priceUnit = e;
   console.log(this.priceUnit);
  }
  public sortString(sortValue: boolean, key: string): void {
    if (sortValue) {
        this.top100Cryptos = this.top100Cryptos.sort((a,b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if (nameA < nameB) {
              return -1;
            } else if (nameA > nameB) {
              return 1;
            }
            return 0;
        });
    } else {
        this.top100Cryptos = this.top100Cryptos.sort((a,b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
    
          if (nameA > nameB) {
            return -1;
          } else if (nameA < nameB) {
            return 1;
          }
          return 0;
    });
    }
  }
 
  public sortNumeric(sortValue: boolean, key: string) { // using a key because we want this to be dynamic enough that we can sort by any of the numeric values
    if(sortValue) {
      this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
          return a[key] - b[key];
      });
    } else {
      this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
        return b[key] - a[key];
    });
    }
  }
}
