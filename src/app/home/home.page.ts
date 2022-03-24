import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public myForm = this.fb.group({
    toppings: [[]],
  });

  constructor(private fb: FormBuilder) {}
}
