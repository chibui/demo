import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service";
import { Item } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo';
  items: Array<Item>;

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.fetchData(); 
  }

  fetchData() {
    this.apiService.fetch().subscribe((data: Array<Item>) => {
      console.log(data)
      this.items = data;
    }, (err) => {
      console.log(err);
    });
  }
}
