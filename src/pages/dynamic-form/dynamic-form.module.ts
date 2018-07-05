import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DynamicFormPage } from './dynamic-form';

@NgModule({
  declarations: [
    DynamicFormPage,
  ],
  imports: [
    IonicPageModule.forChild(DynamicFormPage),
  ],
})
export class DynamicFormPageModule {}
