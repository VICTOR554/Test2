import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-notes',
  templateUrl: './new-notes.page.html',
  styleUrls: ['./new-notes.page.scss'],
})
export class NewNotesPage implements OnInit {
  form: FormGroup;

  constructor(private homeService: HomeService, private router: Router) { }

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
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(1800)],
      }),
    });
  }

  onCreateNote() {
    if (!this.form.valid) {
      return;
    }

    // tslint:disable-next-line: max-line-length
    this.homeService.addNote(
      this.form.value.title,
      this.form.value.modul,
      this.form.value.description,
    ),
    console.log(this.homeService.notes);
    this.form.reset();
    this.router.navigate(['home/tabs/notes']);

  }

}
