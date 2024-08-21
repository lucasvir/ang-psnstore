import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
	logoUrl: string =  "https://upload.wikimedia.org/wikipedia/commons/2/2b/PlayStation_Store.png"
}
