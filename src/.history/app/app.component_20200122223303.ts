import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from './field.interface';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ApiService } from './service/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newoption = {
    type: 'select',
    label: 'Country',
    name: 'country',
    value: 'UK',
    options: this.service.GetData()
};
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [];
  constructor(private service: ApiService) {
    setTimeout(() => {
      this.regConfig = [
        {
          type: 'input',
          label: 'Username',
          inputType: 'text',
          name: 'name',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Name Required'
            },
            {
              name: 'pattern',
              validator: Validators.pattern('^[a-zA-Z]+$'),
              message: 'Accept only text'
            }
          ]
        },
        {
          type: 'input',
          label: 'Email Address',
          inputType: 'email',
          name: 'email',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Email Required'
            },
            {
              name: 'pattern',
              validator: Validators.pattern(
                '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
              ),
              message: 'Invalid email'
            }
          ]
        },
        {
          type: 'input',
          label: 'Password',
          inputType: 'password',
          name: 'password',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Password Required'
            }
          ]
        },
        {
          type: 'date',
          label: 'DOB',
          name: 'dob',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Date of Birth Required'
            }
          ]
        },
        {
          type: 'select',
          label: 'Country',
          name: 'country',
          value: 'UK',
          options: this.service.GetData()
        },
        {
          type: 'checkbox',
          label: 'Accept Terms',
          name: 'term',
          value: true
        },
        {
          type: 'button',
          label: 'Save'
        }
      ];
    }, 3000);
  }
  submit(value: any) {
    console.log(value);
  }
  adddata() {
   this.regConfig.push(this.newoption);
  }
}
