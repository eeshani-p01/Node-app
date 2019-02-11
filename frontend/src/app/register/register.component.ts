import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
    form;
    constructor(private formBuilder: FormBuilder){
        this.form = formBuilder.group({
            firstName: ['', Validators.required],
            lastName:  ['', Validators.required],
            email:  ['', Validators.required],
            password:  ['', Validators.required],
            confirmPassword:  ['', Validators.required],
        })
    }

    onSubmit(){
        console.log(this.form.value)
    }
}