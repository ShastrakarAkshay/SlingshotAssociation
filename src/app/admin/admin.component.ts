import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SlingshotService } from '../shared/services/slingshot.service';
import { UserConfig } from '../shared/interfaces/slingshot.interface';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('mySidepanel', {static: false}) mySidepanel: ElementRef;

  private uid: string;
  private menu = [
    {
      name: 'Affiliations',
      link: './requests',
      isActive: false
    },
    {
      name: 'Events',
      link: './events',
      isActive: false
    },
    {
      name: 'Match Results',
      link: './match',
      isActive: false
    },
    {
      name: 'Referee',
      link: './refree',
      isActive: false
    },
    {
      name: 'Enquiries',
      link: './enquiries',
      isActive: false
    },
    {
      name: 'Support',
      link: './support',
      isActive: false
    }
  ]

  constructor(private _service: SlingshotService, private router: Router, private afAuth: AngularFireAuth, private authService: AuthService) {
    this.uid = localStorage.getItem('uid');
    this.afAuth.user.subscribe(user => {
      if(!user){
        this.authService.signOut();
      }
    }, error => {
      this.authService.signOut();
    });
  }

  ngOnInit() {
    // TO DO....
    // check first use is logged in or not
    // if not logged in then remove all localstorage and redirect to login page
    this.setActiveClassFromURL(this.router.url);
    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
      this.setActiveClassFromURL(this.router.url);
    });
  }

  setActiveClassFromURL(url: any) {
    const currentPath = url.substr(7);
    this.menu.forEach(item => {
      item.isActive = false;
      if (item.link === './' + currentPath) {
        item.isActive = true;
      }
    })
  }

  setActiveClass(menuItem: any) {
    this.menu.forEach(item => {
      item.isActive = false;
      if (item.name === menuItem.name) {
        item.isActive = true;
      }
    })
    this.closeNav();
  }

  openNav() {
    this.mySidepanel.nativeElement.style.width = "270px";
    this.mySidepanel.nativeElement.style.display = "block";
  }
  
  closeNav() {
    this.mySidepanel.nativeElement.style.display = "none";
  }
}
