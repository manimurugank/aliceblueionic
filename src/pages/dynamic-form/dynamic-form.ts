import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { CommonService } from '../../services/commonservice';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
// import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generated class for the DynamicFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dynamic-form',
  templateUrl: 'dynamic-form.html'
})
export class DynamicFormPage {
  imageFileName: string;
  imageData: any;
  camera: any;
  dynamicForm: any;
  form_name: any;
  form_fields: any;
  tab1Params: any;
  form_json;
  form_object = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, commonService: CommonService, private fileChooser: FileChooser, public actionSheetCtrl: ActionSheetController) {
    this.tab1Params = navParams;
    console.log(this.tab1Params.data)
    this.form_json = commonService.form_json;
    this.form_json.forEach(element => {
      if(element.id == this.tab1Params.data){
        this.form_fields = element.fields;
        this.form_name = element.name;
        this.form_fields.forEach(elementOne => {
          this.form_object[elementOne.name] = new FormControl('', Validators.required);
        });
        this.dynamicForm = new FormGroup(this.form_object);
      }
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DynamicFormPage');
  }


  getCamera() {
    
        const options: CameraOptions = {
          quality: 35,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          targetWidth: 500,
          // targetHeight:1280,
        }
    
        this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          this.imageData = imageData;
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          this.imageFileName = base64Image;
          console.log(this.imageFileName)
        }, (err) => {
          // Handle error
        });
      }
      getGallary() {
        // const options: CameraOptions = {
        //   quality: 100,
        //   destinationType: this.camera.DestinationType.FILE_URI,
        //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        // }
        this.fileChooser.open()
        .then(uri => {
          this.imageFileName = uri})
        .catch(e => console.log(e));
    
        // this.camera.getPicture(options).then((imageData) => {
        //   console.log(imageData);
        //   this.imageFileName = 'data:image/jpeg;base64,' + imageData;;
        // }, (err) => {
        //   console.log(err);
        //   this.presentToast(err);
        // });
      }
    
    
      presentActionSheet() {
        const actionSheet = this.actionSheetCtrl.create({
          title: 'Choose File From',
          buttons: [
            {
              text: 'Camera',
              handler: () => {
                this.getCamera();
              }
            }, {
              text: 'Gallery',
              handler: () => {
                this.getGallary();
              }
            }, {
              text: 'Cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        actionSheet.present();
      }

}
