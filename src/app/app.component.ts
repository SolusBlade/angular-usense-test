import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isEmpty: boolean = true;
  isCorrectLength: boolean = false;

  isEasy: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;

  lettersCheck = (str: string): boolean => /[a-zA-Z]/.test(str);
  numbersCheck = (str: string): boolean => /\d/.test(str);
  specialCharsCheck = (str: string): boolean => /[^a-zA-Z0-9]/.test(str);

  strLengthCheck = (str: string): number => str.length;

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    // Check length 
    this.strLengthCheck(input.value) > 0
      ? (this.isEmpty = false)
      : (this.isEmpty = true);

    this.strLengthCheck(input.value) >= 8
      ? (this.isCorrectLength = true)
      : (this.isCorrectLength = false);
    // Easy check
    if (
      (this.lettersCheck(input.value) ||
        this.numbersCheck(input.value) ||
        this.specialCharsCheck(input.value)) &&
      this.isCorrectLength
    ) {
      this.isEasy = true;
    } else {
      this.isEasy = false;
    }
    // Medium check
    if (
      ((this.lettersCheck(input.value) && this.numbersCheck(input.value)) ||
        (this.lettersCheck(input.value) &&
          this.specialCharsCheck(input.value)) ||
        (this.numbersCheck(input.value) &&
          this.specialCharsCheck(input.value))) &&
      this.isCorrectLength
    ) {
      this.isMedium = true;
    } else {
      this.isMedium = false;
    }
    // Strong check
    if (
      this.lettersCheck(input.value) &&
      this.numbersCheck(input.value) &&
      this.specialCharsCheck(input.value) &&
      this.isCorrectLength
    ) {
      this.isStrong = true;
    } else {
      this.isStrong = false;
    }
  }
}
