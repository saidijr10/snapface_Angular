import { Component } from '@angular/core';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
