import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  ViewChild
} from "@angular/core";

import { FormBuilder, Validators, FormControl } from "@angular/forms";

/** @title Basic datepicker */
@Component({
  selector: "datepicker-overview-example",
  templateUrl: "datepicker-overview-example.html"
})
export class DatepickerOverviewExample implements OnChanges {
  private form: any;

  constructor(formBuilder: FormBuilder) {
    console.log("pepe ");
    this.form = formBuilder.group({
      expiry_date: ["", Validators.required]
    });
  }

  ngOnChanges() {
    console.log("hola ");
    Object.keys(this.form.value).forEach(c => {
      console.log(c);
    });
  }

  onSave($event: any) {
    Object.keys(this.form.value).forEach(c => {
      console.log(this.form.get("expiry_date").value);

      console.log(this.form[c]);
    });
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
