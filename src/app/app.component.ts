import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user$ : User[];

  constructor(private dataService:DataService){}

  ngOnInit(){
    return this.dataService.getusers().subscribe(data => this.user$=data)
  }
  
}
