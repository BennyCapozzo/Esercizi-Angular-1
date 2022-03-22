import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-single',
  templateUrl: './order-single.component.html',
  styleUrls: ['./order-single.component.css']
})
export class OrderSingleComponent implements OnInit {
  users=[1,2,3];

  constructor() { }

  ngOnInit(): void {
  }

}
