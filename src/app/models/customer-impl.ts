import {Customer} from "../commission-back-end.service";
export class CustomerImpl implements Customer {
  reference:string;
  callSign:string;
  
  constructor(reference:string, callSign:string) {
      this.reference = reference;
      this.callSign = callSign;
      }
}

