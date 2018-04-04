import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class CryptoService {
  //creating an instantiation of the the HttpClient
  
  constructor( public http: HttpClient) { }//making sure it has a reference to the HttpClient

    public getBitcoinmarketCap() {
      return this.http.get('https://api.coinmarketcap.com/v1/global/');
    }

    public getAllCryptos() {
      return this.http.get('https://api.coinmarketcap.com/v1/ticker/');
    }
  
}