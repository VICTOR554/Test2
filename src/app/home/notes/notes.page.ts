import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Note, Homes } from '../home.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit, OnDestroy {
  loadednote: Note[];
  private noteSub: Subscription;


  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.noteSub = this.homeService.notes.subscribe(notes => {
      this.loadednote = notes;
    });

  }
  onDelete(noteId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', noteId);
  }

// used to clear subscription to avoid memory leaks
ngOnDestroy() {
  if (this.noteSub) {
    this.noteSub.unsubscribe();
  }
}
}
