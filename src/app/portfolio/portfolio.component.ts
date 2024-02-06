import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  currentSrc:any ;
  getSrc(element:HTMLImageElement , hamada:HTMLImageElement , largediv:HTMLDivElement):void{
    this.currentSrc = element.src;
    this.currentSrc;
    largediv.classList.remove('d-none');
  }

  disAppearLargeDiv(largediv:HTMLDivElement):void{
    largediv.classList.add('d-none');
  }
}