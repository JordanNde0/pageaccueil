import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
    like = false;
    nombreLike=0;
    likes(){
      this.like = !this.like;
      this.nombreLike = this.nombreLike? this.nombreLike+1 : this.nombreLike-1;
    }
}
