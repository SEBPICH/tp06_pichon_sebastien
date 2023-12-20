import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {

  constructor(private http: HttpClient) {}

  getProducts(searchTerm?: string): Observable<Product[]> {
    const params = searchTerm ? new HttpParams().set('searchTerm', searchTerm) : undefined;
    return this.http.get<Product[]>(environment.backendProduct, { params });
  }
}


/*@Injectable()
export class CatalogService {
  constructor(private http: HttpClient) {}
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendProduct);
  }
}*/
