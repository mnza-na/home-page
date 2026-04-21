import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiniBox } from './mini-box/mini-box'
import { MiniBoxContainer } from './mini-box-container/mini-box-container'
import { HeadPage } from './head-page/head-page'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiniBox, MiniBoxContainer, HeadPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Home Page');
  protected readonly projects = [
    { title: 'Home Page', link: 'https://github.com/mnza-na/home-page', short_description: 'Carta de presentacion a mis proyectos', icon: 'logo-1.svg'},
    { title: 'Glue Job Examples', link: 'https://github.com/mnza-na/aws-glue-examples', short_description: 'Ejemplos para reutilizacion de jobs de glue', icon: 'glue.webp'},
    { title: 'Link Saver', link: 'https://github.com/mnza-na/link-saver', short_description: 'Un pequeño back + front para almacenar links que utilizo recurrentemente (en curso)', icon: 'public/image-not-found.png'},
  ]
}
