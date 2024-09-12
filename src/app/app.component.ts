import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthService } from '../services/password-strength.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  passwordForm: FormGroup;
  isEmpty: boolean = true;
  isCorrectLength: boolean = false;
  
  isEasy: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;

  constructor(private passwordStrengthService: PasswordStrengthService) {
    this.passwordForm = new FormGroup({
      passwordInput: new FormControl(''),
    });

    this.passwordForm
      .get('passwordInput')
      ?.valueChanges.subscribe((value: string) => {
        this.updatePasswordStrength(value);
      });
  }

  private updatePasswordStrength(value: string): void {
    // Length Check
    this.isEmpty = value.length === 0;
    this.isCorrectLength = value.length >= 8;

    // Is password easy check
    this.isEasy = this.passwordStrengthService.checkEasy(
      value,
      this.isCorrectLength,
    );

    // Is password medium check
    this.isMedium = this.passwordStrengthService.checkMedium(
      value,
      this.isCorrectLength,
    );

    // Is password strong check
    this.isStrong = this.passwordStrengthService.checkStrong(
      value,
      this.isCorrectLength,
    );
  }
}
