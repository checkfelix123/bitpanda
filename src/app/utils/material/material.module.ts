import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule
  ],
  exports: [
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule,
  ],
})
export class MaterialModule {
}
