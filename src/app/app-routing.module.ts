import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashbroadComponent } from './pages/dashbroad/dashbroad.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"", component:AppComponent},
  {path:"home", component:AppComponent},
  {path:"admin", component:DashbroadComponent},
  {path:"product", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
