import { createAction } from '@ngrx/store';
import { Info } from 'src/app/models/page-model';

export const addCustomer = createAction(
  '[Customer] Add Customer',
    (customer:string)=> ({name: customer}) // converted to object, if not then it will be returned as {0: <customer value>}
);

export const addStaff = createAction(
  '[Staff] Add Staff',
    (staff:string)=> ({name: staff})
);

export const addProduct = createAction(
  '[Product] Add Product',
    (product:Info)=> product // directly returning it
);

export const removeProduct = createAction(
  '[Product] Remove Product',
    (product)=> ({product})
);






