import { Action, createReducer, on } from '@ngrx/store';
import { GenderApiResponse, GenderData } from 'src/app/models/page-model';
import * as Actions from 'src/app/components/with-effects/store/action/page.actions';

export const genderFeatureKey = 'GENDER';

export const initialState: GenderData = {
  gender: {name:"Akash", gender:"male"},
  error: null,
  loading: false,
};

export const genderReducer = createReducer(
  initialState,
  on(Actions.loadGender, (state: GenderData) => ({ ...state, loading: true })),
  on(Actions.successGender, (state: GenderData, gender: GenderApiResponse) => ({ ...state, gender, loading: false })),
  on(Actions.failedGender, (state: GenderData, { error }) => ({ ...state, error, loading: false }))
);
