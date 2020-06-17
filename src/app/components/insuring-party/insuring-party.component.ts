import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insuring-party',
  templateUrl: './insuring-party.component.html',
  styleUrls: ['./insuring-party.component.css']
})
export class InsuringPartyComponent implements OnInit {
  insuringParty: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.insuringParty = this.fb.group({
      egn: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  next() {
  }
}
