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

import {MatTooltipModule} from '@angular/material/tooltip';
import { SlingshotComponent } from './slingshot/slingshot.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AssociationComponent, PopupDialog } from './association/association.component';
import { MatchResultsComponent } from './match-results/match-results.component';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { AffiliationRequestsComponent } from './admin/affiliation-requests/affiliation-requests.component';

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
    AdminComponent,
    AffiliationRequestsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatTooltipModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  entryComponents: [PopupDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
