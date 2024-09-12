import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  checkEasy(value: string, isCorrectLength: boolean): boolean {
    return (
      (this.lettersCheck(value) ||
        this.numbersCheck(value) ||
        this.specialCharsCheck(value)) &&
      isCorrectLength
    );
  }

  checkMedium(value: string, isCorrectLength: boolean): boolean {
    return (
      ((this.lettersCheck(value) && this.numbersCheck(value)) ||
        (this.lettersCheck(value) && this.specialCharsCheck(value)) ||
        (this.numbersCheck(value) && this.specialCharsCheck(value))) &&
      isCorrectLength
    );
  }

  checkStrong(value: string, isCorrectLength: boolean): boolean {
    return (
      this.lettersCheck(value) &&
      this.numbersCheck(value) &&
      this.specialCharsCheck(value) &&
      isCorrectLength
    );
  }

  private lettersCheck(str: string): boolean {
    return /[a-zA-Z]/.test(str);
  }

  private numbersCheck(str: string): boolean {
    return /\d/.test(str);
  }

  private specialCharsCheck(str: string): boolean {
    return /[^a-zA-Z0-9]/.test(str);
  }
}
