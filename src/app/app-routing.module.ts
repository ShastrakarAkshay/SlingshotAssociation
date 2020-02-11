import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AffliationComponent } from './affliation/affliation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SlingshotComponent } from './slingshot/slingshot.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AssociationComponent } from './association/association.component';
import { MatchResultsComponent } from './match-results/match-results.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'affiliation',
    component: AffliationComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'sports',
    component: SlingshotComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'association',
    component: AssociationComponent
  },
  {
    path: 'results',
    component: MatchResultsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
