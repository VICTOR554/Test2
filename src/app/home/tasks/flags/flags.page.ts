import { Component, OnInit, OnDestroy } from '@angular/core';
import { Flag } from '../../home.model';
import { HomeService } from '../../home.service';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.page.html',
  styleUrls: ['./flags.page.scss'],
})
export class FlagsPage implements OnInit, OnDestroy {
  loadedtask: Flag[];
  private taskSub: Subscription;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.taskSub = this.homeService.Flag.subscribe(flags => {
      this.loadedtask = flags;
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
