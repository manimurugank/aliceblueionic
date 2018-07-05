import { Component } from '@angular/core';

import { Platform, ActionSheetController,  NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html',
})
export class BasicPage {
  [x: string]: any;
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navCtrl: NavController
  ) { }

  login(){
    this.navCtrl.push(LoginPage);
    }
}