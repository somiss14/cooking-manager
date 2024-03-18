import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.comonent.html'
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  authForm: FormGroup;

  constructor(private authService: AuthService) {
  }

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
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    if (this.isLoginMode) {
      //...
    } else {
      this.authService.signup(email, password).subscribe(resData => {
        console.log(resData);
      }, error => {
        console.log(error);
      });
    }

    form.reset();
  }
}
