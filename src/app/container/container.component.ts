import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick(input: HTMLInputElement) {
    alert('hello ' + input.value);
    console.log(input.value);
  }
}
