import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxGroupComponent } from './checkbox-group.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [CheckboxGroupComponent, CheckboxComponent],
  exports: [CheckboxGroupComponent, CheckboxComponent],
})
export class CheckboxGroupComponentModule {}
