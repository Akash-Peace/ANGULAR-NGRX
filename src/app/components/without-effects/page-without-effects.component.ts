import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Info } from 'src/app/models/page-model';
import { addCustomer, addProduct, addStaff, removeProduct } from './store/action/page.actions';
import { Observable } from 'rxjs';
import { selectCustomers, selectStaffs, selectProducts } from './store/selector/page.selectors';

@Component({
  selector: 'page-without-effects',
  templateUrl: './page-without-effects.component.html',
  styleUrls: ['./page-without-effects.component.scss']
})
export class PageWithoutEffectsComponent {

  customers$: Observable<string[]>;
  staffs$: Observable<string[]>;
  products$: Observable<string[]>;

  constructor(private store: Store) {
    this.customers$ = this.store.pipe(select(selectCustomers));
    this.staffs$ = this.store.pipe(select(selectStaffs));
    this.products$ = this.store.pipe(select(selectProducts));
  }

  addCustomer(name : string){
    // We can pass any type (here name) but in action function, it will be returned as object only.
    this.store.dispatch(addCustomer(name)); // passing as string
  }
  addStaff(name : string){
    this.store.dispatch(addStaff(name));
  }
  addProduct(name : string){
    const product: Info = {name};
    this.store.dispatch(addProduct(product)); // passing as object
  }
  removeProduct(name : string){
    this.store.dispatch(removeProduct(name));
  }
}
