import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DynamicFormPage } from '../dynamic-form/dynamic-form';
import { HTTP } from '@ionic-native/http';
import { CommonService } from '../../services/commonservice';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public form_json;
  tab1Root = DynamicFormPage;
  // tab2Root = AadharInfoPage;
  // tab3Root = PanInfoPage;
  // tab4Root = DocumentInfoPage;
  constructor(public navCtrl: NavController, commonService: CommonService) {
    this.form_json = commonService.form_json;
    console.log(this.form_json);
    // this.http.get('/assets/form.json', {}, {})
    // .then(data => {
    //   console.log(data.status);
    //   this.form_json = JSON.parse(data.data);
    //   console.log(data.data); // data received by server
    //   console.log(data.headers);
  
    // })
    // .catch(error => {
    //   console.log(error);
    //   console.log(error.error); // error message as string
    //   console.log(error.headers);
  
    // });

  }
  showBasic(){
    this.navCtrl.push('form1');
  }

}
