import { Component, Input } from '@angular/core';
import { face } from '../Models/face-snaps';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [UpperCasePipe,],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap {
  constructor(private router: Router) { }

  @Input() facesnap !: face;

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`);
  }








}