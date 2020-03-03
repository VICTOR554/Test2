import { Component, OnInit } from '@angular/core';
import { Homes } from '../../home.model';
import { HomeService } from '../../home.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.page.html',
  styleUrls: ['./flags.page.scss'],
})
export class FlagsPage implements OnInit {

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
