import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl:'./pageaccueil/pageaccueil.component.html',
  styleUrl: './pageaccueil/pageaccueil.component.css',
})
export class AppComponent {
  title = 'app-accueil';

}
