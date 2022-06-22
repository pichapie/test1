import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [InputComponent],
})
export class SharedComponentsModule {}
