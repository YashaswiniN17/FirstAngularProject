import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrl: './top-selling.component.css'
})
export class TopSellingComponent implements OnInit {
  readonly getk='https://localhost:44301/api/OrderProduct/top-selling-product';
  topSellingProduct:any ;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.TopSelling();
  }
  TopSelling() {
    this.http.get(this.getk).subscribe((res) => {
      console.log(res);
      this.topSellingProduct = res;
    });
  }
}
    //this.http.get<any>('https://localhost:44301/api/OrderProduct/top-selling-product').subscribe(
    //  (product:any)=>{
    //    this.topSellingProduct=product;
    //  },
    //  (error:any)=>{
    //    console.error('Error fetching product',error);
    // }
    //);