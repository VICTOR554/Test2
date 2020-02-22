import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Homes } from '../home.model';
import * as moment from 'moment';
import { PopoverController, NavController } from '@ionic/angular';
import { LecturerPopoverComponent } from './lecturer-popover/lecturer-popover.component';
// import { isObject } from 'util';
import { Events } from '@ionic/angular';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit {
  loadedclass: Homes[];

  // tslint:disable-next-line: max-line-length
  constructor(private homeService: HomeService, private popoverController: PopoverController, private navCtrl: NavController, private events: Events) {

  }



  ngOnInit() {
    this.loadedclass = this.homeService.home;
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

}
