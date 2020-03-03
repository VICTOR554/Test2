import { Component, OnInit } from '@angular/core';
import { Homes } from '../../home.model';
import { HomeService } from '../../home.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.page.html',
  styleUrls: ['./overdue.page.scss'],
})
export class OverduePage implements OnInit {

  loadedclass: Homes[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadedclass = this.homeService.home;
  }

  onDelete(homeId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete item', homeId);
  }

}
