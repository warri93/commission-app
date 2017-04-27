export class RavagoEntity {
  reference: string;
  callSign: string;

  constructor(reference?: string, callSign?: string) {
    this.reference = reference;
    this.callSign = callSign;
  }
}
