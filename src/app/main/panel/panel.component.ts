import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
//import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-panel',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

}
