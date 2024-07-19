import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Products } from '../products';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  productlist:Products[]=[];

  constructor(public data:DataService) { }

  ngOnInit(): void {
    
      
    }

  
  

}
