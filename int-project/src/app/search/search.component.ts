import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchitem:string='';

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  search(){
    if(this.searchitem =='dog'){
      this.router.navigate(['/dog']);
    }
    if(this.searchitem =='cat'){
      this.router.navigate(['/cat']);
    }
  }

}
