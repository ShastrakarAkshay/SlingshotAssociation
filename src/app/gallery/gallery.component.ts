import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  gallery: any[] = [];
  showSpinner: boolean = false;
  imageList: any[] = [[], [], []];

  constructor(
    private afStorage: AngularFireStorage,
    private _spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getAllImages();
  }

  getAllImages() {
    this._showSpinner();
    this.afStorage.storage
      .ref("Gallery/")
      .listAll()
      .then((result) => {
        const chunk = result.items.length / 3 + 1;
        this.gallery = new Array(Math.ceil(result.items.length / chunk))
          .fill(0)
          .map((_) => result.items.splice(0, chunk));
        if (this.gallery.length > 0) this.sliceImageArray();
        this._hideSpinner();
      });
  }

  sliceImageArray() {
    this.gallery[0].forEach((item) => {
      const ref = this.afStorage.storage.ref().child("Gallery/" + item.name);
      ref.getDownloadURL().then((url) => {
        this.imageList[0].push({ documentURL: url });
      });
    });

    this.gallery[1].forEach((item) => {
      const ref = this.afStorage.storage.ref().child("Gallery/" + item.name);
      ref.getDownloadURL().then((url) => {
        this.imageList[1].push({ documentURL: url });
      });
    });

    this.gallery[2].forEach((item) => {
      const ref = this.afStorage.storage.ref().child("Gallery/" + item.name);
      ref.getDownloadURL().then((url) => {
        this.imageList[2].push({ documentURL: url });
      });
    });
  }

  private _showSpinner() {
    this.showSpinner = true;
    this._spinner.show();
  }

  private _hideSpinner() {
    this._spinner.hide();
    this.showSpinner = false;
  }
}
