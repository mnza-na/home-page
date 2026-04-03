import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-page',
  imports: [],
  templateUrl: './head-page.html',
  styleUrl: './head-page.css',
})
export class HeadPage {
  @Input() title: string = '';
  @Input() icon: string = '';
}
