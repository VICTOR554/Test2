import { Component, OnInit, OnDestroy } from '@angular/core';
import { Overdue } from '../../home.model';
import { HomeService } from '../../home.service';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.page.html',
  styleUrls: ['./overdue.page.scss'],
})
export class OverduePage implements OnInit, OnDestroy {

  loadedtask: Overdue[];
  private taskSub: Subscription;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.taskSub = this.homeService.Overdue.subscribe(overdues => {
      this.loadedtask = overdues;
    });
  }

  onDelete(homeId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', homeId);
  }

   // used to clear subscription to avoid memory leaks
   ngOnDestroy() {
    if (this.taskSub) {
      this.taskSub.unsubscribe();
    }
  }

}
