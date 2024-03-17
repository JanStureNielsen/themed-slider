import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatSliderModule, CommonModule],

})
export class AppComponent {
  useOtherTheme: boolean = true;
  useOtherColor: boolean = true;

  public palette() {
      const palette = this.useOtherColor ? "primary" : "accent";

      console.log('jsn: palette:', palette);

      return palette;
  }

  public theme() {
      return this.useOtherTheme ? "use-light-theme" : "";
  }

}
