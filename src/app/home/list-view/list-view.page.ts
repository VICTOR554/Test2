import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Homes } from '../home.model';
import * as moment from 'moment';
import { PopoverController, NavController } from '@ionic/angular';
import { LecturerPopoverComponent } from './lecturer-popover/lecturer-popover.component';
// import { isObject } from 'util';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit, OnDestroy {
  loadedclass: Homes[];
  private listSub: Subscription;

  // tslint:disable-next-line: max-line-length
  constructor(
    private homeService: HomeService,
    private popoverController: PopoverController,
   ) {

  }


  ngOnInit() {
    this.listSub = this.homeService.home.subscribe(home => {
      this.loadedclass = home;
    });
  }

  // need help to move i to lecturer-popover where i will set that i = lecturer[i].lecturer
  getindex(i: number) {

    console.log(i);
  }

  stop(event: Event) {
    event.stopPropagation();
  }

  getweeks() {

  }

  async presentPopover(eve) {
    const popover = await this.popoverController.create({
      component: LecturerPopoverComponent,
      componentProps: {},
      event: eve,
      mode: 'ios',
      translucent: true,
      cssClass: 'popOver'
    });
    return await popover.present();
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.listSub) {
      this.listSub.unsubscribe();
    }
  }
}
