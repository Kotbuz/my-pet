import { Component, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pet',
  styleUrl: './pet.css',
  templateUrl: './pet.html',
})
export class Pet {
  @Input() petName: string = 'Кличка питомц';
  @Input() petType: string = 'Вид';
  @Input() petAge: number = 0;
  hugs: number = 0;

  addHug() {
    this.hugs++;
  }
  resetHugs() {
    this.hugs = 0;
  }

}
