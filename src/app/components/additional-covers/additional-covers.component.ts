import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-covers',
  templateUrl: './additional-covers.component.html',
  styleUrls: ['./additional-covers.component.css']
})
export class AdditionalCoversComponent implements OnInit {
  imageUrl="./assets/additionalcovercar.jpg "
  constructor() { }

  ngOnInit(): void {
  }

 
}
