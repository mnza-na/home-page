import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-box-container',
  imports: [],
  templateUrl: './mini-box-container.html',
  styleUrl: './mini-box-container.css',
})
export class MiniBoxContainer {
  @Input() title: string = ''
}
