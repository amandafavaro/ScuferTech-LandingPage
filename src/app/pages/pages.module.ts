import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    MainComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class PagesModule { }
