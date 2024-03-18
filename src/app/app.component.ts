import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgFor,

    MatCardModule,
    MatRadioModule,
    MatSliderModule,
    ],
})
export class AppComponent {
  paletteNames: string[] = ['primary', 'accent', 'warn'];
  paletteSelected: string = this.paletteNames[0];

  themeNames: string[] = ['theme-1', 'theme-2', 'theme-3'];
  themeSelected: string = this.themeNames[0];

}
