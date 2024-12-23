import { AlbumService } from './album.service';
import albums from '../../../data/db.json';
import { Album } from '../types/album';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

describe('AlbumService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let albumService: AlbumService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    albumService = new AlbumService(httpClientSpy);
  });

  it('should be created', () => {
    expect(albumService).toBeTruthy();
  });

  it('should request albums', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(albums));

    albumService.getAllAlbums().subscribe({
      next: (data: Object) => {
        expect(data).toEqual(albums);
        done();
      }
    })
  });

  it('should return an error', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'New error.',
      status: 400,
      statusText: 'An error occurred'
    });

    httpClientSpy.get.and.throwError(errorResponse);

    albumService.getAllAlbums().subscribe({
      next: (data) => {
        console.log(data);
        done();
      },
      error: (err: HttpErrorResponse) => {
        console.log(`err: ${err}`);
        done();
      }
    });
  });
});
