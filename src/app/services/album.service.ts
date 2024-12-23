import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../types/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  getAllAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>('http://localhost:3000/albums');
  }

}
