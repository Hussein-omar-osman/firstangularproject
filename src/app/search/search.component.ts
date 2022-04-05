import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  searchTerm: string = 'apple';

  onSearchValue(eventData: any) {
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchTerm = (<HTMLInputElement>eventData.target).value;
  }
}
