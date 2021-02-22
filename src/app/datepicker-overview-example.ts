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
      let time = this.form.get("expiry_date").value;
      let date = this.adjustDate(this.form.get("expiry_date").value);

        console.log(time);
        console.log(date);

  }
    private adjustDate(ds: string): string {
    // ds is an iso string in Zulu time
    const tz_adj = new Date().getTimezoneOffset(); // the locale timezone offset
    const ts_adj = Date.parse(ds) - tz_adj * 60 * 1000;

    const d = new Date(ts_adj);
    // output is just the date
    return d.toISOString().split("T")[0];
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
