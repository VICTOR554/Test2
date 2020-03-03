import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Note, Homes } from '../home.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  // experimenting with output of array
  loadednote: Note[];
  loadedclass: Homes[];

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.loadednote = this.homeService.notes;
    this.loadedclass = this.homeService.home;
  }
  onDelete(homeId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', homeId);
  }


}
