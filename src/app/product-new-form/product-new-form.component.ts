import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

import { Product } from '../product';

@Component({
  selector: 'app-product-new-form',
  templateUrl: './product-new-form.component.html',
  styleUrls: ['./product-new-form.component.css']
})
export class ProductNewFormComponent implements OnInit {
  product: FormGroup = this.fb.group({
    id: new FormControl(null, Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    price: new FormControl('', [Validators.required, Validators.minLength(4)]),
    image: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  get formValue() {
    return this.product.value as Product;
  }

  constructor(public productService: ProductsService, private fb: FormBuilder) { }

  onSubmit() {
    if (!this.product.valid) {
      return false;
    }
    this.productService.createProduct(this.formValue).subscribe(data => data);
    this.product.reset();
  }


  ngOnInit(): void {
  }

}
