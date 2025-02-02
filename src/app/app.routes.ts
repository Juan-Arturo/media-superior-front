import { Routes } from '@angular/router';
import { PanelComponent } from './main/panel/panel.component';
import { HomeComponent } from './main/panel/home/home.component';
import { ProfileComponent } from './main/panel/profile/profile.component';

export const routes: Routes = [
    { path: "", redirectTo: "panel", pathMatch: "full" },

    //Panel principal
  {
    path: "panel",
    component: PanelComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" }, 
      { path: "home", component: HomeComponent },
      { path: "profile", component: ProfileComponent },  
    ],
  },

    {path: "**", component: PanelComponent},

];