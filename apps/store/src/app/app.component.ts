import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';
import {formatRating} from '@nx-shopping-system/store/util-formatters'

@Component({
  selector: 'nx-shopping-system-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
  formatRating = formatRating;
}
