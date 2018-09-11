import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

    now: Date;

    this.now = new Date();

    author: string;

    this.author = 'Denver Nash';

  }

}
