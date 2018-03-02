import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs/";
import { Station } from '../models/station';
import 'rxjs/add/operator/map';

@Injectable()
export class JcdecauxService {
  private url = environment.api.apiJcdecaux;
  constructor(private _httpClient: HttpClient) { }

  getStations(): Observable<Station[]> {
    return this._httpClient.get<Station[]>(this.url).map(res => res);
  }
}
