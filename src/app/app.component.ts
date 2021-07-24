import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Vladimir Edson Solorzano Huamani";
  age: number = 40;
  posts:any = [];

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data =>{
      this.posts = data;
    });
  }
}
