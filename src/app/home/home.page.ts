import { Component,OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
movies:any[]=[];

ngOnInit(){
  this.service.GetMovieData().subscribe(data=>
 {
    this.movies = data.Search;
  });
}
  constructor(private service:MovieService) {}

}
