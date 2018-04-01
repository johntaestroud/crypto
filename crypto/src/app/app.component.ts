import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public cryptoService: CryptoService) {
    this.getBitcoinStats(); //calling a reference 
  }

  public getBitcoinStats(): void {
    this.cryptoService.getBitcoinmarketCap().subscribe((data: any) => {
      console.log(data);
    });
  }
}
