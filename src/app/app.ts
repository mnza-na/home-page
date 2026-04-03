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
    { title: 'Project A', link: 'https://angular.dev', short_description: 'texto 1 chiquieto y cortito' },
    { title: 'Project B', link: 'https://angular.dev/tutorials', short_description: 'texto 1 chiquieto y cortito' },
    { title: 'Project C', link: 'https://angular.dev/ai/develop-with-ai', short_description: 'texto 1 chiquieto y cortito' },
    { title: 'Project C', link: 'https://angular.dev/ai/develop-with-ai', short_description: 'texto 1 chiquieto y cortito' },
    { title: 'Project C', link: 'https://angular.dev/ai/develop-with-ai', short_description: 'texto 1 chiquieto y cortito' },
    { title: 'Project C', link: 'https://angular.dev/ai/develop-with-ai', short_description: 'texto 1 chiquieto y cortito' },
    { title: 'Project C', link: 'https://angular.dev/ai/develop-with-ai', short_description: 'texto 1 chiquieto y cortito' },
  ]
}
