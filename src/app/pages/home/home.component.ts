import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hearts = Array(25);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openSurprise() {
    this.router.navigate(['/proposal']);
  }
}
