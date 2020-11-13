import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { StoreSharedUiModule } from '@nx-shopping-system/store/shared-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreSharedUiModule,
    RouterModule.forRoot(
      [
        {
          path: 'game/:id',
          loadChildren: () =>
            import('@nx-shopping-system/store/feature-game-detail').then(
              (module) => module.StoreFeatureGameDetailModule
            ),
        },
      ],
      { initialNavigation: 'enabled'}
    ),
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
