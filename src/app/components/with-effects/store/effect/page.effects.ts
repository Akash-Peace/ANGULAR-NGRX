import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { loadGender, successGender, failedGender } from '../action/page.actions';
import { HttpClient } from '@angular/common/http';
import { GenderApiResponse } from 'src/app/models/page-model';

@Injectable()
export class GenderEffects {
    constructor(private actions$: Actions, private httpClient: HttpClient) {}
    loadGender$ = createEffect(() => this.actions$.pipe(
        ofType(loadGender),
        switchMap((action) => 
            this.httpClient.get<GenderApiResponse>('https://api.genderize.io/?name='+action.name).pipe(
                map((gender: GenderApiResponse) => successGender(gender)),
                catchError(error => of(failedGender(error)))
            )
        )
    ));
}
