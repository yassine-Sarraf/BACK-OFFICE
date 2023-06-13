import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../lib/card/card.component';

@NgModule({
  imports: [CommonModule],
  exports:[CardComponent],
  declarations: [CardComponent],
})
export class CardModule {}
