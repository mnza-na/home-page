import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-box',
  imports: [],
  templateUrl: './mini-box.html',
  styleUrl: './mini-box.css',
})
export class MiniBox {
  @Input() name: string = '';
  @Input() link: string = '';
  @Input() content: string = '';
  @Input() icon: string = '';
}
