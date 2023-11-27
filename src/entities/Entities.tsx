export interface MyFormValues {
  work: WorkFace[];
  phone: number | null;
  email: string;
  name: string;
  edu: EducationFace[];
  skills: string[];
  references: references[];
}

export interface EducationFace {
  eduCity: string;
  school: string;
  degree: string;

}

export interface WorkFace {
  jobTitle: string;
  jobCity: string;
  employer: string;
}

export interface references{
    reference: string,
    contact: string
}