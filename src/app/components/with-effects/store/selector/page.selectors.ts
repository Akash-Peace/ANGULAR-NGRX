import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGender from '../reducer/page.reducer';
import { GenderData } from 'src/app/models/page-model';

export const selectGenderStore = createFeatureSelector<GenderData>(
    fromGender.genderFeatureKey
);

export const selectGender = createSelector(
    selectGenderStore,
    (state:GenderData)=>state
);