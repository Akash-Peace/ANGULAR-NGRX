import { createAction } from '@ngrx/store';
import { GenderApiResponse } from 'src/app/models/page-model';

export const loadGender = createAction('[LOAD] Load Gender', (name: string) => ({name}));

export const successGender = createAction(
  '[SUCCESS] Gender fetched successfully',
    (gender:GenderApiResponse)=> (gender)
);

export const failedGender = createAction(
  '[FAILED] Gender request failed',
    (error:string)=> ({error})
);