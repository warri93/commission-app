import {CreatorPerson} from "../commission-back-end.service";
export class CreatorPersonImpl implements CreatorPerson{
  reference:string;
  firstName:string;
  familyName:string;

  constructor(reference?:string,firstName?:string,familyName?:string){
    this.reference = reference;
    this.firstName = firstName;
    this.familyName = familyName;
  }
}
