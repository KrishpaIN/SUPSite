import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() heading: string;
  @Input() caption: string;
  @Input() description: string;
  @Input() rtl: boolean;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
    
  }

}
