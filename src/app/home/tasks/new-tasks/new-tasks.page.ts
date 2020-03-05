import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.page.html',
  styleUrls: ['./new-tasks.page.scss'],
})
export class NewTasksPage implements OnInit {


  form: FormGroup;
  date;
  defaultStartTime;
  defaultEndTime;

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.date = new Date().toISOString();
    this.defaultStartTime = new Date(new Date().setHours(5, 0, 0)).toISOString();
    this.defaultEndTime = new Date(new Date().setHours(19, 0, 0)).toISOString();
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

  onCreateAlltask() {
    console.log(this.form);
    if (!this.form.valid) {
      return;
    }

    // tslint:disable-next-line: max-line-length
    this.homeService.addAlltask(
      this.form.value.title,
      this.form.value.duedate,
      this.form.value.modul,
      this.form.value.description,
    ),
    console.log(this.homeService.notes);
    this.form.reset();
    this.router.navigate(['home/tabs/notes']);

  }



}
