import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}
