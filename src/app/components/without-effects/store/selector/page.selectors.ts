import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducer/page.reducer';
import { AllData } from 'src/app/models/page-model';

export const selectAllData = createFeatureSelector<AllData>(
    fromCustomer.allDataFeatureKey
);

export const selectCustomers = createSelector(
    selectAllData,
    (state:AllData)=>state.customers
);
export const selectStaffs = createSelector(
    selectAllData,
    (state:AllData)=>state.staffs
);
export const selectProducts = createSelector(
    selectAllData,
    (state:AllData)=>state.products
);