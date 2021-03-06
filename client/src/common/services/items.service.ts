import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {AppStore} from '../models/appstore.model';
import {Item} from '../models/item.model';

const BASE_URL = 'http://localhost:3000/items/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ItemsService {
  items: Observable<Array<Item>>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.items = store.select<Item[]>('items');
  }

  loadItems() {
    // this.http.get(BASE_URL)
    //   .map(res => res.json())
    //   .map(payload => ({ type: 'ADD_ITEMS', payload }))
    //   .subscribe(action => this.store.dispatch(action));
    let initialItems: Item[] = [
      {
      "id": 1,
      "name": "Item 1",
      "description": "This is a description"
    },
    {
      "id": 2,
      "name": "Item 2",
      "description": "This is a description"
    },
    {
      "id": 3,
      "name": "Item 3",
      "description": "This is a lovely item"
    },
    {
      "name": "hghg",
      "description": "gfhg",
      "id": 4
    }
    ];
    this.store.dispatch({type: 'ADD_ITEMS', payload: initialItems})
  }

  saveItem(item: Item) {
    (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Item) {
    this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_ITEM', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateItem(item: Item) {
    this.http.put(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
      .subscribe(action => this.store.dispatch({ type: 'UPDATE_ITEM', payload: item }));
  }

  deleteItem(item: Item) {
    this.http.delete(`${BASE_URL}${item.id}`)
      .subscribe(action => this.store.dispatch({ type: 'DELETE_ITEM', payload: item }));
  }
}
