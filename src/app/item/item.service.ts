import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ItemService {
  private apiUrl = 'http://localhost:3000/items';
  private selectedItem;
  constructor(private http: Http) { }

  get(): Observable<Response> {
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json());
  }

  onItemsRetrieved(callback): void {
  	this.get().subscribe(callback);
  }

  getSelectedItem(): any {
  	return this.selectedItem;
  }

  setSelectedItem(item: any): void {
  	this.selectedItem = item;
  }
}
