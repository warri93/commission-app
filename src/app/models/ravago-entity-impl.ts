import {RavagoEntity} from "../commission-back-end.service";
export class RavagoEntityImpl implements RavagoEntity{

  public reference:string;
  public callSign:string;

  constructor(reference:string, callSign:string) {
      this.reference = reference;
      this.callSign = callSign;
      }
}
