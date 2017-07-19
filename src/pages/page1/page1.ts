import { Component } from '@angular/core';
import { Storage } from '../../plugins';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, private storage: Storage) {
    console.log(storage);
    storage.keys().then(console.log);
  }

}
