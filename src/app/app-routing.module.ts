import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AffliationComponent } from './affliation/affliation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SlingshotComponent } from './slingshot/slingshot.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AssociationComponent } from './association/association.component';
import { MatchResultsComponent } from './match-results/match-results.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AffiliationRequestsComponent } from './admin/affiliation-requests/affiliation-requests.component';
import { EventsComponent } from './admin/events/events.component';
import { EnquiriesComponent } from './admin/enquiries/enquiries.component';
import { MatchEventResultsComponent } from './admin/match-event-results/match-event-results.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginGuard } from './shared/guards/login.guard';
import { RefreePanelComponent } from './admin/refree-panel/refree-panel.component';
import { CommitteeComponent } from './committee/committee.component';
import { SupportComponent } from './support/support.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'affiliation',
    component: AffliationComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'sports',
    component: SlingshotComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'association',
    component: AssociationComponent,
  },
  {
    path: 'results',
    component: MatchResultsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'committee',
    component: CommitteeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'requests', pathMatch: 'full' },
      { path: 'requests', component: AffiliationRequestsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'match', component: MatchEventResultsComponent },
      { path: 'enquiries', component: EnquiriesComponent },
      { path: 'support', component: SupportComponent },
      { path: 'refree', component: RefreePanelComponent },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
