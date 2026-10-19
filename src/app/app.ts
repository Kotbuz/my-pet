import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pet } from './pet/pet';

@Component({
  imports: [RouterOutlet, Pet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = 'my-pet';

  pets = [
    { id: 1, petName: "Найда", petType: "Собака", petAge: 13 },
    { id: 2, petName: "Тикси", petType: "Кошка", petAge: 11 },
    { id: 3, petName: "Босс", petType: "Собака", petAge: 1 },
  ]
}
