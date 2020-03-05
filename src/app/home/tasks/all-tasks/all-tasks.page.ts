import { Component, OnInit, OnDestroy } from '@angular/core';
import { Alltask } from '../../home.model';
import { HomeService } from '../../home.service';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.page.html',
  styleUrls: ['./all-tasks.page.scss'],
})
export class AllTasksPage implements OnInit, OnDestroy {

  loadedtask: Alltask[];
  private taskSub: Subscription;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.taskSub = this.homeService.Alltasks.subscribe(tasks => {
      this.loadedtask = tasks;
    });
  }

  onDelete(homeId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', homeId);
  }

  stop(event: Event) {
    event.stopPropagation();
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.taskSub) {
      this.taskSub.unsubscribe();
    }
  }

}
