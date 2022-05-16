import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductcategoryRoutingModule } from './productcategory-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductcategoryRoutingModule
  ]
})
export class ProductcategoryModule { }
