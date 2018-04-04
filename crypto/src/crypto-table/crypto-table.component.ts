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

  constructor(public cryptoService: CryptoService) {
    this.getTop100Cryptos();
  }

  public getTop100Cryptos(): void {
    this.cryptoService.getAllCryptos().subscribe((data: any) => {
      this.top100Cryptos = data.map((element: any) => {
        return new CryptoCurrency(element);
      });
      console.log(this.top100Cryptos);
    });
  }
}
