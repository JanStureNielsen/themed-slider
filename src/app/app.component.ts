import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, MatRadioModule, MatSliderModule, NgFor ],
})
export class AppComponent {
  paletteNames: string[] = ['primary', 'accent', 'warn'];
  paletteSelected: string = 'primary';

  useOtherTheme: boolean = true;
  useOtherColor: boolean = true;

  public palette() {
      const palette = this.paletteSelected;

      console.log('jsn: palette: ', palette);

      return palette;
  }

  public theme() {
      const theme = this.useOtherTheme ? 'use-light-theme' : '';

      console.log('jsn: theme: ', theme);

      return theme;
  }

}
