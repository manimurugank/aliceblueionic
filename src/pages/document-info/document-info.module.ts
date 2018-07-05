import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentInfoPage } from './document-info';

@NgModule({
  declarations: [
    DocumentInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentInfoPage),
  ],
})
export class DocumentInfoPageModule {}
