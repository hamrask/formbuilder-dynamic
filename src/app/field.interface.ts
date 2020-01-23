import { Observable } from "rxjs";

export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: Observable<any>;
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
}
