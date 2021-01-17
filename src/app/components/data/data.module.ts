import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataComponent} from './data.component';
import {FiatComponent} from './fiat/fiat.component';
import {MaterialModule} from '../../utils/material/material.module';
import {CommoditiesComponent} from './commodities/commodities.component';

import {IndexesComponent} from './indexes/indexes.component';
import {CryptocoinsComponent} from './cryptocoins/cryptocoins.component';
import {LoadingScreenComponent} from './loading-screen/loading-screen.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'fiat',
    component: FiatComponent
  },
  {
    path: 'commodities',
    component: CommoditiesComponent
  },
  {
    path: 'cryptocoins',
    component: CryptocoinsComponent
  },
  {
    path: 'indexes',
    component: CryptocoinsComponent
  },

];
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
    RouterModule.forChild(routes)

  ]
})
export class DataModule {
}
