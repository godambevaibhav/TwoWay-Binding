import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  /* template:`
    <h1>Test</h1>
  `, */
  styleUrls: ['./order.component.css']
  /* styles: [`
  h1 {
    color: #ff0000 
 } 
  `] */
})
export class OrderComponent implements OnInit {

  orderName = 'DoNuts';
  orderQty = 10;

  allowOrders = false;

  constructor() {
    setTimeout(() => {
      this.allowOrders = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onChangOrder() {
    this.orderName = 'Pizza';
    this.orderQty = 20;
  }

  changeOrder(event: Event) {
    console.log(event);
    this.orderName = (<HTMLInputElement>event.target).value;
  }
}
