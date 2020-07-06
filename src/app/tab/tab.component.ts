import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  welcomeuser = sessionStorage.getItem('welcomename');
  activeTab = 0;
  policyTabToggle = true;
  mtplCalculatorStep;
  constructor() {}

  ngOnInit(): void {}

  changeTab = data => {
    this.policyTabToggle = false;
    this.activeTab = data;
  }
  switch = index => {
    this.activeTab = 0;
    this.mtplCalculatorStep = index;
  }
}
