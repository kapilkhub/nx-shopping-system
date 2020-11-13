import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { formatRating } from '@nx-shopping-system/store/util-formatters';
import { Game } from '@nx-shopping-system/util-interface';

@Component({
  selector: 'nx-shopping-system-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   *
   */
  constructor(private http: HttpClient) {}
  title = 'Board Game Hoard';
  games = this.http.get<Game[]>('/api/games');
  formatRating = formatRating;
}
