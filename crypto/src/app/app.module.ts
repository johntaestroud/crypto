import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CryptoService } from '../services/crypto.service';
import { CryptoTableComponent } from '../crypto-table/crypto-table.component';
import { NotFoundComponent } from '..//not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: CryptoTableComponent},
  //{ path: 'bitcoinStats', component: BitcoinStatsComponent },
  { path: '**', component: NotFoundComponent } //check it in order so this needs to be the last path
];

@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) //passing our routes to our RouterModule so we can use it with our router outlet
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
