import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(public productService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts();
    this.productService.products.subscribe(data => this.products = data);
  }

}
