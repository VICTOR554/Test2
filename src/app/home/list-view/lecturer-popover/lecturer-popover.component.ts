import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../../home.service';
import { Homes } from '../../home.model';
import { Events } from '@ionic/angular';
import { Route, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-lecturer-popover',
  templateUrl: './lecturer-popover.component.html',
  styleUrls: ['./lecturer-popover.component.scss'],
})
export class LecturerPopoverComponent implements OnInit, OnDestroy {
  loadedclass: Homes[];
  private popSub: Subscription;

  // tslint:disable-next-line: no-inferrable-types

  constructor(private homeService: HomeService, public events: Events) {
  }

  ngOnInit() {
    this.popSub = this.homeService.home.subscribe(home => {
      this.loadedclass = home;
    });


  }

  ngOnDestroy() {
    if (this.popSub) {
      this.popSub.unsubscribe();
    }
  }

}
