import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // Unsure the best way to maintain state in the singleton and pull data / create new data - this seems quite hacky.
  public products = new Subject<Product[]>();
  private _products: Product[];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const response = this.http.get<Product[]>('http://rest.ngrok.io/products');
    response.subscribe((data) => {
      this._products = data;
      this.products.next(this._products);
    });
    return this.products.asObservable();
  }

  createProduct(product: Product): Observable<Product[]> {
    const response = this.http.post<Product>('http://rest.ngrok.io/products', product);
    response.subscribe((data) => {
      this._products.push(data)
      this.products.next(this._products);
    });
    return this.products.asObservable();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }
}
