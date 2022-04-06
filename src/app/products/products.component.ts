import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  products = [
    {
      id: 1,
      name: 'Minimalists Analog Watch',
      price: '109',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/product-image-1.jpeg',
    },
    {
      id: 2,
      name: 'Hisense ultra HD Smart TV',
      price: '3339',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/product-image-2.jpeg',
    },
    {
      id: 3,
      name: 'APPLE iPhone 12',
      price: '1855',
      color: 'Black',
      available: 'Not Available',
      image: '/assets/products/product-image-3.jpeg',
    },
    {
      id: 4,
      name: 'LG Fully Automatic Washing Machine',
      price: '1765',
      color: 'White',
      available: 'Available',
      image: '/assets/products/product-image-4.jpeg',
    },
    {
      id: 5,
      name: 'LG Refrigerator with Door Cooling',
      price: '2815',
      color: 'White',
      available: 'Not Available',
      image: '/assets/products/product-image-5.jpeg',
    },
    {
      id: 6,
      name: 'DELL Inspiron One 27 Ryzen 7',
      price: '2145',
      color: 'white',
      available: 'Available',
      image: '/assets/products/product-image-6.jpeg',
    },
    {
      id: 7,
      name: 'Sumsang Galaxy S20+',
      price: '1100',
      color: 'black',
      available: 'Not Available',
      image: '/assets/products/product-image-7.jpeg',
    },
    {
      id: 8,
      name: 'PlayStation 5',
      price: '500',
      color: 'white',
      available: 'Available',
      image: '/assets/products/product-image-8.jpeg',
    },
  ];

  theColor(avai: any) {
    if (avai === 'Available') {
      return 'green';
    } else {
      return 'red';
    }
  }
  AllProducts = this.products.length;

  Available = this.products.filter((p) => {
    return p.available === 'Available';
  }).length;

  NotAvailable = this.products.filter((p) => {
    return p.available === 'Not Available';
  }).length;

  radioBtnValue: string = 'All';
  searchedTermReceived: string = '';

  receviedRadioValue(event: string) {
    this.radioBtnValue = event;
    // console.log(this.radioBtnValue);
  }

  receivedSearch(data: string) {
    this.searchedTermReceived = data;
    // console.log(this.searchedTermReceived);
  }
}
