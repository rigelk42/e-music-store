import { Component } from '@angular/core';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  constructor(private albumService: AlbumService) { }
}
