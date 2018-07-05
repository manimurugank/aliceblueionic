import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PanInfoPage } from './pan-info';

@NgModule({
  declarations: [
    PanInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PanInfoPage),
  ],
})
export class PanInfoPageModule {}
