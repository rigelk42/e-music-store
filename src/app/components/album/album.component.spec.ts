import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponent } from './album.component';
import { Album } from '../../types/album';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  const album: Album = {
    title: "Stone Gon'",
      artist: "Barry White",
      year: "1973",
      image:"stone-gon.jpg",
      genres: [
        "disco",
        "R&B",
        "soul"
      ],
      price: 125.00
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumComponent);
    fixture.componentRef.setInput('album', album);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
