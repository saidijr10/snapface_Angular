import { Component, OnInit } from '@angular/core';
import { face } from '../Models/face-snaps';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapsService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit {
  Snaps!: face[];

  constructor(private faceSnapsService: FaceSnapsService) { }
  ngOnInit() {
    this.Snaps = this.faceSnapsService.getFaceSnaps();
  }

}
