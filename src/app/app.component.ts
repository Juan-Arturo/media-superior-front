import { Component, OnInit } from '@angular/core';
import { MainComponent } from './main/main.component';


declare function mainPanelJS(): any;

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'media-superior';

  ngOnInit(): void {
    setTimeout(() => {
      mainPanelJS();
    },50);
  }
}
