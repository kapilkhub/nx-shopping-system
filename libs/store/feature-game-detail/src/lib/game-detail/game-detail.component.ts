import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { formatRating } from '@nx-shopping-system/store/util-formatters';
import { Game } from '@nx-shopping-system/util-interface';

@Component({
  selector: 'nx-shopping-system-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  game$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id')),
    switchMap((id) => this.http.get<Game>(`/api/games/${id}`))
  );

  formatRating = formatRating;

  ngOnInit(): void {}
}
