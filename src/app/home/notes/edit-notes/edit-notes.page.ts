import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { HomeService } from '../../home.service';
import { Homes } from '../../home.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.page.html',
  styleUrls: ['./edit-notes.page.scss'],
})
export class EditNotesPage implements OnInit {
  loadedclass: Homes[];
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('homeId')) {
        this.navCtrl.navigateBack('/home/tabs/notes');
        return;
      }
      this.loadedclass = this.homeService.getPlace(paramMap.get('homeId'));
      this.form = new FormGroup({
        title: new FormControl(this.place.title, {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        description: new FormControl(this.place.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(1800)],
        }),
      });
    });
  }

}
