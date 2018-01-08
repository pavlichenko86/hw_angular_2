import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = '1';
  name = 'Apple';
  price = 1000;
  description = 'The best';

  plus() : void {
        this.price++;
    }
  minus() : void {
      this.price--;
  }


}
