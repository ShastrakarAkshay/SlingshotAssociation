import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styles: [
    `
      * {
        font-family: "Didact Gothic", sans-serif;
      }
    `,
  ],
})
export class ConfirmDialogComponent {
  public type: string;
  public message: string;

  constructor(
    public _dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    _dialogRef.disableClose = true;
    this.message = data.message;
    this.type = data.type;
  }
  close() {
    this._dialogRef.close();
  }
}
