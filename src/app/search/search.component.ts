import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  searchTerm: string = '';

  @Output() searchGo: EventEmitter<any> = new EventEmitter();

  onSearched() {
    this.searchGo.emit(this.searchTerm);
  }
}
