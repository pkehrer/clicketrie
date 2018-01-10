import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'n001-introduction',
  templateUrl: './n001-introduction.component.html',
  styleUrls: ['./n001-introduction.component.css']
})
export class N001IntroductionComponent {
  constructor() { }

  data1 = [
    { image: 'unicorn_hair.jpg', caption: 'Kristen sporting the infamous unicorn \'doo.' },
    { image: 'kristens_old_board.jpg', caption: '*yawn*' }
  ]
  data2 = [{
    image: 'christmas_board.jpg',
    caption: 'It\'s okay, I guess..  The \'JOYACCESS Full-size Whisper-quiet Compact wireless Keyboard\' $28.99',
    link: 'https://www.amazon.com/gp/product/B01N0PZOJE'
  }]
  data3 = [
    {
      image: 'wasd_code_87.jpg',
      caption: 'WASD Code 87-key w/ White LED backlight $150',
      link: 'https://www.amazon.com/87-Key-Illuminated-Mechanical-Keyboard-Backlighting/dp/B00LTAEV0K'
    }
  ]

}
