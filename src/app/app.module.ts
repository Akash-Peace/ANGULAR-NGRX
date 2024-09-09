import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PageWithoutEffectsComponent } from './components/without-effects/page-without-effects.component';
import { allDataFeatureKey, customerReducer } from '../app/components/without-effects/store/reducer/page.reducer';
import { genderFeatureKey, genderReducer } from '../app/components/with-effects/store/reducer/page.reducer';
import { PageWithEffectsComponent } from './components/with-effects/page-with-effects.component';
import {metaReducers, reducers} from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GenderEffects } from './components/with-effects/store/effect/page.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PageWithoutEffectsComponent,
    PageWithEffectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature(allDataFeatureKey,customerReducer),
    StoreModule.forFeature(genderFeatureKey,genderReducer),
    EffectsModule.forRoot([GenderEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
