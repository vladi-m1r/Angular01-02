import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email;
  webpage : string;
  hobbies : string[];

  constructor(){
    console.log("Constructor working...")
    this.name = "Vladimir Solorzano";
    this.email = "vsolorzano@unsa.edu.pe"
    this.webpage = "www.unsa.edu.pe";
    this.hobbies = ["Futbol, Videojuegos, Otros"];
  }

  showhobbies(){
    return true;
  }
}
