import { Component, OnInit, OnDestroy } from '@angular/core';
import { Completedtask } from '../../home.model';
import { HomeService } from '../../home.service';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.page.html',
  styleUrls: ['./completed-tasks.page.scss'],
})
export class CompletedTasksPage implements OnInit, OnDestroy {

  loadedtask: Completedtask[];
  private taskSub: Subscription;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.taskSub = this.homeService.Completedtasks.subscribe(completedtasks => {
      this.loadedtask = completedtasks;
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
