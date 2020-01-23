import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
@Component({
  selector: 'app-checkbox',
  template: `
<div class='demo-full-width margin-top' [formGroup]='group' >
<input type='checkbox' [formControlName]='field.name'/>
<label>{{field.label}}</label>
</div>
`,
  styles: []
})
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
