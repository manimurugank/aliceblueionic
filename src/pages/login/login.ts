import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loginForm = new FormGroup({
      username: new FormControl('admin', Validators.required),
      password: new FormControl('admin', Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    if (this.loginForm.valid) {
      this.navCtrl.push(HomePage);
    }
  }

}
