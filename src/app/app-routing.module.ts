import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AffliationComponent } from './affliation/affliation.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "affiliation",
    component: AffliationComponent
  },
  {
    path: "about",
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
