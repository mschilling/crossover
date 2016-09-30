import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SeriesService} from '../../providers/series-service';

/*
  Generated class for the Timeline page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
  providers: [SeriesService]
})
export class TimelinePage {

  items: Array<any>;

  constructor(public navCtrl: NavController, private seriesService: SeriesService) {
    this.seriesService.getTimeline().subscribe(
      data => {
        this.items = data.results;
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => console.log('Series Timeline Search Complete')
    );
  }

  ionViewDidLoad() {
    console.log('Hello Timeline Page');
  }

}