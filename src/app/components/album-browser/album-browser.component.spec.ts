import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumBrowserComponent } from './album-browser.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AlbumBrowserComponent', () => {
  let component: AlbumBrowserComponent;
  let fixture: ComponentFixture<AlbumBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumBrowserComponent],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
