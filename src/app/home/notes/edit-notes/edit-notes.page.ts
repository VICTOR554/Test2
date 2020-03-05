import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomeService } from '../../home.service';
import { Note } from '../../home.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.page.html',
  styleUrls: ['./edit-notes.page.scss'],
})
export class EditNotesPage implements OnInit, OnDestroy {
  loadednote: Note;
  form: FormGroup;
  private noteSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private navCtrl: NavController

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('noteId')) {
        this.navCtrl.navigateBack('/home/tabs/notes');
        return;
      }
      this.noteSub = this.homeService.getNote(paramMap.get('noteId')).subscribe(notes => {
        this.loadednote = notes;
        this.form = new FormGroup({
          title: new FormControl(this.loadednote.title, {
            updateOn: 'blur',
            validators: [Validators.required],
          }),
          description: new FormControl(this.loadednote.description, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(1800)],
          }),
        });
      });

    });

  }

  onUpdateOffer() {
    if (!this.form.valid) {
      return;
    }

    console.log(this.form);
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.noteSub) {
      this.noteSub.unsubscribe();
    }
  }


}
