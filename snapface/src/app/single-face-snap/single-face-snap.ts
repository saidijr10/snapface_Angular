import { Component, OnInit } from '@angular/core';
import { face } from '../Models/face-snaps';
import { NgStyle, NgClass, UpperCasePipe, TitleCasePipe, LowerCasePipe, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.services';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [RouterLink, NgStyle, DecimalPipe, CurrencyPipe, PercentPipe, DatePipe, NgClass, LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnap implements OnInit {



  facesnap!: face;


  clicked!: boolean;
  snapbutton!: string;
  mynumber: number = 23343224.6673;
  mynumber2: number = 0.473;
  mynumber3: number = 34235454342.4467;

  constructor(private faceSnapsServices: FaceSnapsService, private route: ActivatedRoute) {

  }




  ngOnInit(): void {
    this.snapbutton = "💖oh snaps!";
    this.clicked = false;
    this.getFaceSnap();

  }

  onClickSnap(): void {
    if (this.clicked) {
      this.unsnap();
    }
    else {
      this.snap();
    }


  }

  unsnap(): void {

    this.faceSnapsServices.snapFaceSnapById(this.facesnap.id, 'unsnap')
    this.snapbutton = '💖oh snaps!';
    this.clicked = false;

  }
  snap(): void {
    this.faceSnapsServices.snapFaceSnapById(this.facesnap.id, 'snap')
    this.snapbutton = '😥oops unsnaps!';
    this.clicked = true;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.facesnap = this.faceSnapsServices.getFaceSnapById(faceSnapId);
  }


}