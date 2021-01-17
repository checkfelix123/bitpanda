import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataComponent} from './data.component';
import {FiatComponent} from './fiat/fiat.component';
import {MaterialModule} from '../../utils/material/material.module';
import {CommoditiesComponent} from './commodities/commodities.component';
import {AppRoutingModule} from '../../app-routing.module';
import {IndexesComponent} from './indexes/indexes.component';
import {CryptocoinsComponent} from './cryptocoins/cryptocoins.component';
import {LoadingScreenComponent} from './loading-screen/loading-screen.component';


@NgModule({
  declarations: [
    DataComponent,
    FiatComponent,
    CommoditiesComponent,
    IndexesComponent,
    CryptocoinsComponent,
    LoadingScreenComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,

  ],
  exports: [
    LoadingScreenComponent
  ]
})
export class DataModule {
}
