import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataComponent} from './components/data/data.component';
import {FiatComponent} from './components/data/fiat/fiat.component';
import {CommoditiesComponent} from './components/data/commodities/commodities.component';

const routes: Routes = [
  {
    path: '',
    component: DataComponent,
    children: [
      {
        path: 'fiat',
        component: FiatComponent
      },
      {
        path: 'commodities',
        component: CommoditiesComponent
      },
    ]
  },
  {path: '**', redirectTo: ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
