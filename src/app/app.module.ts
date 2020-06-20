import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AffliationComponent } from './affliation/affliation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { SlingshotComponent } from './slingshot/slingshot.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AssociationComponent } from './association/association.component';
import { MatchResultsComponent } from './match-results/match-results.component';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { AffiliationRequestsComponent, DistrictApprovalDialog, ApprovedDistrictComponent, RejectedAffiliationComponent, AddMemberDialog } from './admin/affiliation-requests/affiliation-requests.component';
import { EventsComponent, CreateEventDialog } from './admin/events/events.component';
import { EnquiriesComponent } from './admin/enquiries/enquiries.component';
import { MatchEventResultsComponent, MatchResultsDialog } from './admin/match-event-results/match-event-results.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ConfirmDialogComponent } from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import { RefreePanelComponent, AddRefreeDialog } from './admin/refree-panel/refree-panel.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { CommitteeComponent, RefereeDialog } from './committee/committee.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { SupportComponent } from './support/support.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularFireStorageModule } from '@angular/fire/storage';

import * as firebase from 'firebase/app';
firebase.initializeApp(environment.firebaseConfig);

const APP_DIALOGS = [
  //dialogs
  DistrictApprovalDialog,
  ConfirmDialogComponent,
  CreateEventDialog,
  AddRefreeDialog,
  MatchResultsDialog,
  RefereeDialog,
  AddMemberDialog,
  //child components
  ApprovedDistrictComponent,
  RejectedAffiliationComponent
];

const MATERIAL_MODULES = [
  MatTooltipModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatButtonModule,
  MatDatepickerModule,
  MatSnackBarModule
];
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
    AdminComponent,
    AffiliationRequestsComponent,
    EventsComponent,
    EnquiriesComponent,
    MatchEventResultsComponent,
    RefreePanelComponent,
    ...APP_DIALOGS,
    SpinnerComponent,
    CommitteeComponent,
    ScoreBoardComponent,
    SupportComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ...MATERIAL_MODULES
  ],
  entryComponents: APP_DIALOGS,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
