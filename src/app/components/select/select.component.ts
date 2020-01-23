import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
@Component({
  selector: 'app-select',
  template: `
<div class='demo-full-width margin-top' [formGroup]='group'>
<select [formControlName]='field.name'>
<option *ngFor='let item of field.options|async' [value]='item.id'>{{item.title}}</option>
</select>
</div>
`,
  styles: []
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
