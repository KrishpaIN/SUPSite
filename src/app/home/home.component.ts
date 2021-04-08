import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import Swal from 'sweetalert2'
import {SignupService} from '../signup.service';


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
  headerText:string;
  textArray:Array<string>=[
                           "Nations First market place for Eco-events!",
                           "Unlock the treasure trove of the country's finest sustainable products!!",
                           "Start your Sustainability Journey with Us",
                           "Explore trendy eco-events and workshops",
                           "Unlock the treasure trove of the country's finest sustainable products!!",
                           "Appreciating social change in India",
                           "Find your eco-friendly FAM here",
                           "Introducing Eco coins to Appreciate the Eco conscious individual of India!",
                           "Sign up to be a part of the nation's first eco-platform!!",
                           "Welcome to the Virtual Flea market for the Eco conscious Indian"
                          ]
  constructor(
    private signup:SignupService,
  ) { }

  ngOnInit(): void {
    AOS.init();
    this.animateText();
  }

  animateText(){
    var len = this.textArray.length;
    var global = this;
    setInterval(function() {
      global.headerText = global.textArray[Math.floor(Math.random() * len)];
      // console.log(global.textArray);
    }, 2000);
  }
  submitDetails(data){
    var values = JSON.parse(data).value;
    this.signup.postInvitation(values[0],values[1]).subscribe(x=>{
      if(x){
        Swal.fire({
          icon:'success',
          title: 'Yayy!! Lead the Change',
          confirmButtonText: 'Lovely!',
        })
      }
      else{
        Swal.fire({
          icon:'error',
          title: 'Something went wrong',
          confirmButtonText: 'Sad!',
        })
      }
    });
  }
  showModal() {
    var global = this;
    Swal.mixin({
      input: 'text',
      inputPlaceholder: 'Please enter your details here',
      confirmButtonText: 'Next',
      confirmButtonColor: '#218838',
      showCancelButton: true,
      progressSteps: ['1', '2'],
      
    }).queue([
      {
        title: 'Name',
        text: 'Enter your details to get early Invitation'
      },
      {
        title:'Email',
        input:'email',
      }
    ]).then((result) => {
      if (result) {
        const answers = JSON.stringify(result);
        global.submitDetails(answers);
      }
    })
  }
}
