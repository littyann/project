import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public hero:HeroService){}
ngOnInit(){
this.hero.no();
}
}
