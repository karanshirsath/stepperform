import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigate() {
    this.router.navigate(['tab2']);
  }
}
