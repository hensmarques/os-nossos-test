import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ViewUserPage } from './view-user.page';
import { ViewUserPageRoutingModule } from './view-user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewUserPageRoutingModule
  ],
  declarations: [ViewUserPage]
})
export class ViewUserPageModule {}
