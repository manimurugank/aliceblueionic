import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { BasicPage } from '../pages/basic/basic';
import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { FileChooser } from '@ionic-native/file-chooser';

import { Camera } from '@ionic-native/camera';
import { DocumentInfoPage } from '../pages/document-info/document-info';

import { PanInfoPage } from '../pages/pan-info/pan-info';
import { DynamicFormPage } from '../pages/dynamic-form/dynamic-form';

import { HTTP } from '@ionic-native/http';
import { CommonService } from '../services/commonservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BasicPage,
    PersonalInfoPage,
    DocumentInfoPage,
    PanInfoPage,
    DynamicFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    BasicPage,
    PersonalInfoPage,
    DocumentInfoPage,
    PanInfoPage,
    DynamicFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    Camera,
    HTTP,
    CommonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
