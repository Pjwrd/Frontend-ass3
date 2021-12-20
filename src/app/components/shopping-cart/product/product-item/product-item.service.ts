import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productItem } from './product-item.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductItemService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000';

  getProductItem (): Observable<productItem[]> {
    return this.http.get<productItem[]>(this.url + '/product');
  }

}
