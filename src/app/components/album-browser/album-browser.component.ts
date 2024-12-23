import { Component, OnInit, signal } from '@angular/core';
import { Album } from '../../types/album';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from '../album/album.component';

@Component({
  selector: 'app-album-browser',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule, AlbumComponent],
  templateUrl: './album-browser.component.html',
  styleUrl: './album-browser.component.scss'
})
export class AlbumBrowserComponent implements OnInit {
  filterExpression = signal('');
  $albums = signal<Album[]>([]);
  $filteredAlbums = signal<Album[]>([]);

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((data: Album[]) => {
      this.$albums.set(data);
      this.$filteredAlbums.set([...this.$albums()]);
    });
  }

  applyFilter(): void {
    if (this.filterExpression() !== '') {
      this.$filteredAlbums.set(this.$filteredAlbums().filter((album: Album) => {
        return album.artist.toLowerCase().includes(this.filterExpression().toLowerCase()) ||
          album.title.toLowerCase().includes(this.filterExpression().toLowerCase());
    }))
    } else if (this.filterExpression() === '') {
      this.$filteredAlbums.set([...this.$albums()]);
    }
  }
}
