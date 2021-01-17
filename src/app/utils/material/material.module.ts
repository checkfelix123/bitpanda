import {NgModule} from '@angular/core';
import {AppComponent} from '../../app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    NoopAnimationsModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  exports: [
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MaterialModule {
}
