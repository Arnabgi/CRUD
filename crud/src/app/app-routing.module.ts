import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './Components/add-edit/add-edit.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ViewProductComponent } from './Components/view-product/view-product.component';
const routes: Routes = [
  {path:"", component:ProductListComponent},
  {path:"list", component:ProductListComponent},
  {path:"view/:id", component:ViewProductComponent},
  {path:"add", component:AddEditComponent},
  {path:"edit/:id", component:AddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
