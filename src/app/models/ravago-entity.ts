import {FormControl, FormBuilder} from '@angular/forms';

export class RavagoEntity {
  reference: string;
  callSign: string;

  constructor(reference?: string, callSign?: string) {
    this.reference = reference;
    this.callSign = callSign;
  }

  static createFormGroup() {
    let fb: FormBuilder = new FormBuilder();
    return fb.group({
      reference: new FormControl(""),
      callSign: new FormControl("")
    });
  }
}
