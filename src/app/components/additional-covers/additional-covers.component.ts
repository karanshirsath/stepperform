import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CommonDataService } from 'src/app/common-data.service';


@Component({
  selector: 'app-additional-covers',
  templateUrl: './additional-covers.component.html',
  styleUrls: ['./additional-covers.component.css']
})
export class AdditionalCoversComponent implements OnInit {
  @Output() OnToggle = new EventEmitter()
  @Output() OnSubmission = new EventEmitter<any>();
  @Output() NextTab = new EventEmitter()
  @Input() coverSelected: string
  @Input() installment
  imageUrl = "./assets/carlogo.jpeg ";;
  tickimage = "./assets/tick.jpg";
  additionalcoverForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private GAService: GoogleAnalyticsService, private commonDataService: CommonDataService) { }

  ngOnInit(): void {
    this.additionalcoverForm = this.formBuilder.group({
      cover: ['', Validators.required],
    });
  }

  change = () => {
    if (this.additionalcoverForm.valid) {
      this.OnToggle.emit(true);
      this.commonDataService.additionalcovers.next(this.additionalcoverForm.value)
    } else {
      this.OnToggle.emit(false)
    }
  }
  next = () => {
    this.GAService.event('Next Button clicked', 'Additional Covers', 'Next')
    this.commonDataService.additionalcovers.next(this.additionalcoverForm.value)
    this.NextTab.emit(1)
    this.OnSubmission.emit('Additional Covers form is submitted!')
  }
}
