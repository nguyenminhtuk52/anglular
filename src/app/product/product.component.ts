import { Component, OnInit } from '@angular/core';
import { ProductType } from '../models/ProductType';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ComponentName: string = 'Danh Sach San Pham';
  Status: boolean = false;
  listProduct: ProductType[] = [
    { id: 1, name: "san pham 1", price: 200 },
    { id: 2, name: "san pham 2", price: 200 },
    { id: 3, name: "san pham 3", price: 200 }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  handClick() {
    this.Status = !this.Status
  }
  handRemove(id: number) {
    if (window.confirm("Ban co muon xoa khong ?")) {
      this.listProduct = this.listProduct.filter((product) => product.id !== id);
    }
  }
}
