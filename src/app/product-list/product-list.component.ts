import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any[]=[
    {title:'Beats Headphones',price:'9000',image:"assets/asd.jpg"},
    {title:'Fender Squier Strat',price:'27000',image:"assets/strat.jpg"},
    {title:'Watch',price:'18000',image:"assets/watch.jpg"},
    {title:'Sofa set',price:'45000',image:"assets/sofa.jpg"},
    {title:'Home theatre',price:'8100',image:"assets/home.jpg"},
    {title:'Casio',price:'8190',image:"assets/casio.jpg"},
    {title:'Iphone',price:'6300',image:"assets/iphone.jpg"},
    {title:'Fridge',price:'4500',image:"assets/fridge.jpg"},
    {title:'Table',price:'9000',image:"assets/table.jpg"},
    {title:'Locket',price:'27000',image:"assets/locket.jpg"},
    {title:'Water Heater',price:'18000',image:"assets/water.jpg"},
    {title:'Chair set',price:'9000',image:"assets/chair.jpg"},
    {title:'Bed',price:'27000',image:"assets/bed.jpg"},
    {title:'Gibson Les Paul',price:'90000',image:"assets/les.jpg"},
    {title:'Bracelet',price:'45000',image:"assets/bracelet.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
