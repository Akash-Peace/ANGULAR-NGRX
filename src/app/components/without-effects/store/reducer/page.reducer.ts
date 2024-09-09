import { Action, createReducer, on } from '@ngrx/store';
import { AllData } from 'src/app/models/page-model';
import * as Actions from '../action/page.actions';

export const allDataFeatureKey = 'DB';

export const initialState: AllData = {
  customers: [],
  staffs: [],
  products: []
};

export const customerReducer = createReducer(
  initialState,
  on(Actions.addCustomer, (state:AllData, {name})=>(
    {
      ...state,
      customers:[...state.customers,name]
    }
  )),
  on(Actions.addStaff, (state:AllData, {name})=>(
    {
      ...state,
      staffs:[...state.staffs,name]
    }
  )),
  on(Actions.addProduct, (state:AllData, {name})=>(
    {
      ...state,
      products:[...state.products,name]
    }
  )),
  on(Actions.removeProduct, (state:AllData, {product})=>(
    {
      ...state,
      products: state.products.filter((sp) => sp !== product)
    }
  ))
);