import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {
  presentToast(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  imagePicker: any;
  imageFileName: string;
  imageData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private fileChooser: FileChooser, public actionSheetCtrl: ActionSheetController) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInfoPage');
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
