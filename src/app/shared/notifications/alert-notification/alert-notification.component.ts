import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-alert-notification",
  templateUrl: "./alert-notification.component.html",
  styleUrls: ["./alert-notification.component.scss"],
})
export class AlertNotificationComponent implements OnInit {
  constructor(
    public _dialogRef: MatDialogRef<AlertNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    _dialogRef.disableClose = true;
  }

  ngOnInit() {}
}
