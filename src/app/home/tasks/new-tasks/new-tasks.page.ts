import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.page.html',
  styleUrls: ['./new-tasks.page.scss'],
})
export class NewTasksPage implements OnInit {

  form: FormGroup;

  constructor() { }
  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      module: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      duedate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(1800)],
      }),
    });
  }

  onCreateOffer() {
    console.log(this.form);
  }

}
