export interface CreatorPerson {
    reference: string;
    firstName: string;
    familyName: string;
  }

  export interface RavagoEntity {
    reference: string;
    callSign: string;
  }

  export interface Customer {
    reference: string;
    callSign: string;
  }

  export interface Period {
    startDate: string;
    endDate: string;
  }

  export interface SalesPerson {
    reference: string;
    firstName: string;
    familyName: string;
  }

  export interface Assignee {
    salesVolumePercentage: string;
    commissionPercentage: string;
    salesPerson: SalesPerson;
  }

  export interface AssignmentValue {
    period: Period;
    assignees: Assignee[];
  }

  export interface RuleDTO {
    creatorPerson: CreatorPerson;
    ravagoEntity: RavagoEntity;
    customer: Customer;
    assignmentValues: AssignmentValue[];
  }


