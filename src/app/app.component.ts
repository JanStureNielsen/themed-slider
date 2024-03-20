import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgFor,

    MatCardModule,
    MatRadioModule,
    MatSliderModule,
    ],
})
export class AppComponent {
  themeNames: string[] = ['theme-1', 'theme-2', 'theme-3'];
  themeSelected: string = this.themeNames[0];

  paletteNames: ThemePalette[] = ['primary', 'accent', 'warn'];
  paletteSelected: ThemePalette = this.paletteNames[0];

  onChangeTheme(event: MatRadioChange) {
    this.themeSelected = event.value;
  }

  onChangePalette(event: MatRadioChange) {
    this.paletteSelected = event.value;
  }

}
