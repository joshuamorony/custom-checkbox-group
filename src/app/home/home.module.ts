import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CheckboxGroupComponentModule } from '../shared/ui/checkbox-group/checkbox-group.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    CheckboxGroupComponentModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
