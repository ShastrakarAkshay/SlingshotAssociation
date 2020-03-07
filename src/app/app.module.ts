import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent, LogouDialog } from './layout/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AffliationComponent } from './affliation/affliation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import {MatTooltipModule} from '@angular/material/tooltip';
import { SlingshotComponent } from './slingshot/slingshot.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AssociationComponent } from './association/association.component';
import { MatchResultsComponent } from './match-results/match-results.component';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { AffiliationRequestsComponent, DistrictApprovalDialog } from './admin/affiliation-requests/affiliation-requests.component';
import { EventsComponent } from './admin/events/events.component';
import { EnquiriesComponent } from './admin/enquiries/enquiries.component';
import { MatchEventResultsComponent } from './admin/match-event-results/match-event-results.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PopupDialog } from './shared/services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AffliationComponent,
    ContactUsComponent,
    SlingshotComponent,
    GalleryComponent,
    AssociationComponent,
    MatchResultsComponent,
    LoginComponent,
    PopupDialog,
    LogouDialog,
    DistrictApprovalDialog,
    AdminComponent,
    AffiliationRequestsComponent,
    EventsComponent,
    EnquiriesComponent,
    MatchEventResultsComponent,
    ProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatTooltipModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    NgxSpinnerModule
  ],
  entryComponents: [PopupDialog, DistrictApprovalDialog, LogouDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
