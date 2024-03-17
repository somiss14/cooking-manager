import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.comonent.html'
})
export class AuthComponent implements OnInit{
  isLoginMode = true;
  authForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  private initForm() {
    let email = '';
    let password = '';
    this.authForm = new FormGroup({
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'password': new FormControl(password, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
    form.reset();
  }
}
