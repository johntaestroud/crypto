import { BitcoinMarket } from './../models/bitcoin-market.class';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CryptoService } from '../services/crypto.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [CryptoService],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]// ignores router link errors
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    //arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //assert
    expect(app).toBeTruthy();
  }));

  it('instance of BitcoinMarket', async(() => {
    // arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    // assert
    expect(app.BitcoinMarketCap instanceof BitcoinMarket).toBe(false);
  }));
  
});
