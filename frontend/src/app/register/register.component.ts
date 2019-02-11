import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
    form;
    constructor(private formBuilder: FormBuilder,
        private authService: AuthService){
        this.form = formBuilder.group({
            firstName: ['', Validators.required],
            lastName:  ['', Validators.required],
            email:  ['', Validators.required],
            password:  ['', Validators.required],
            confirmPassword:  ['', Validators.required],
        }, { validator: this.passwordMatcher})
    }

    onSubmit(){
        this.authService.register(this.form.value);
    }

    passwordMatcher(c: AbstractControl): { invalid: boolean } {
        if (c.get('password').value !== c.get('confirmPassword').value) {
            return {invalid: true};
        }
    }
}