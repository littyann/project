import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(public hero:HeroService){}
ngOnInit(){
this.hero.yes();
}
}
