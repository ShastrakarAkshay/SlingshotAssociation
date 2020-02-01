import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AffliationComponent } from './affliation/affliation.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "affiliation",
    component: AffliationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
