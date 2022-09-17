import { AbstractControl } from '@angular/forms';

export function AgeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    debugger;
   
  if (Number(control.value) < 18) {
    return { 'age': true };
  }
  return null;
}