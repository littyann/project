import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(public hero:HeroService){}
ngOnInit(){
this.hero.yes();
}
}
