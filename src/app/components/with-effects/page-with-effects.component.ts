import { Component } from '@angular/core';
import { loadGender } from './store/action/page.actions';
import { select, Store } from '@ngrx/store';
import { selectGender } from './store/selector/page.selectors';
import { Observable } from 'rxjs';
import { GenderData } from 'src/app/models/page-model';

@Component({
  selector: 'page-with-effects',
  templateUrl: './page-with-effects.component.html',
  styleUrl: './page-with-effects.component.scss'
})
export class PageWithEffectsComponent {
  gender$: Observable<GenderData>;

  constructor(private store: Store) {
    this.gender$ = this.store.pipe(select(selectGender));
  }

  updateGender(name : string){
    this.store.dispatch(loadGender(name)); // passing as string
  }
}
