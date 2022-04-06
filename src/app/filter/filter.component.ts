import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() all = 0;
  @Input() availa = 0;
  @Input() notAvaila = 0;

  selectedRadioBtn = 'All';

  @Output() filteredRadioBtn: EventEmitter<string> = new EventEmitter<string>();

  changeRadioBtn() {
    this.filteredRadioBtn.emit(this.selectedRadioBtn);
    console.log(this.selectedRadioBtn);
  }
}
