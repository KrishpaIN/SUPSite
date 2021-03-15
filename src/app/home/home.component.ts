import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import  AOS  from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sectionData = [
    {
      heading: "",
      caption: "Nation's first one stop destination for Eco-Events",
      description: "Organize, Promote, Discover the latest eco-events and connect with the country’s eco-conscious population!!",
      imgSrc: "assets/images/image2.png",
      rtl: false
    },
    {
      heading: "",
      caption: "Welcome to the world of Sustainable events",
      description: `Opens the door to the
      country’s best sustainable workshop
      and finest seminars on climate change.`,
      imgSrc: "assets/images/image3.png",
      rtl: true
    },
    {
      heading: "",
      caption: "Become the Country’s first eco-warriors",
      description: `Scroll through the treasure trove of the most exciting eco-friendly events we have listed just for you!!
      Click on the one that you wish to find more about.
      Read the detailed event description to know more about the event.
      Click on Join and get ready to have a fun time with SUP!!
      `,
      imgSrc: "assets/images/image4.png",
      rtl: false      
    },
    {
      heading: "",
      caption: "Create Event",
      description: "Now, you can curate your very own Eco-event with SUP!! Grab this exclusive opportunity and let us help you in your journey to sustainability.",
      imgSrc: "assets/images/image5.png",
      rtl: true      
    },
    // {
    //   heading: "",
    //   caption: "Your Eco-Friendly Buddy",
    //   description: "SUP’s Event feature spreads the word about your undying commitment to an eco-friendly and sustainable lifestyle and helps you promote and discover eco-events. We have curated various earth-friendly events just for you…",
    //   imgSrc: "assets/images/sup.png",
    //   rtl: false      
    // }
  ]

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
