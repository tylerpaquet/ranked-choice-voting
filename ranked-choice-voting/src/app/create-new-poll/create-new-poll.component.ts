import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-new-poll',
  templateUrl: './create-new-poll.component.html',
  styleUrls: ['./create-new-poll.component.scss']
})
export class CreateNewPollComponent {
  addOptionControl = new FormControl<string>('');
  options: string[] = [];

  constructor(private _snackBar: MatSnackBar) {

  }

  addOption(): void {
    const optionToAdd = this.addOptionControl.value?.trim();

    if (optionToAdd) {
      this.options.push(optionToAdd);
      this.addOptionControl.setValue('');
      console.log(this.options);
    }
  }

  createPoll(): void {
    if (this.options.length < 2) {
      this._snackBar.open('Please add at least 2 options to create a poll.')
    }
  }

  removeOption(index: number): void {
    console.log(index);
    this.options.splice(index, 1);
  }
}
