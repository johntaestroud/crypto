import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { BitcoinMarket} from '../models/bitcoin-market.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //creating a prop for the class { BitcoinMarket }
  public bitcoinMarketCap: BitcoinMarket = new BitcoinMarket();

  constructor(public cryptoService: CryptoService) {
    this.getBitcoinStats(); //calling a reference 
  }

  public getBitcoinStats(): void {
    this.cryptoService.getBitcoinmarketCap().subscribe((data: any) => {
      this.bitcoinMarketCap = new BitcoinMarket(data); //passing our data
      console.log(this.bitcoinMarketCap);
    });
  }
}
