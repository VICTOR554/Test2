import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { Homes } from '../../home.model';
import { Events } from '@ionic/angular';
import { Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lecturer-popover',
  templateUrl: './lecturer-popover.component.html',
  styleUrls: ['./lecturer-popover.component.scss'],
})
export class LecturerPopoverComponent implements OnInit {
  loadedclass: Homes[];

  // tslint:disable-next-line: no-inferrable-types

  constructor(private homeService: HomeService, public events: Events) {
  }

  ngOnInit() {
    this.loadedclass = this.homeService.home;

  }




}
