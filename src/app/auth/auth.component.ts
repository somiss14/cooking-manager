import {Component, ComponentFactoryResolver, OnInit, ViewChild} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AlertComponent} from "../shared/alert/alert.component";
import {PlaceholderDirective} from "../shared/placeholder/placeholder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.comonent.html'
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  authForm: FormGroup;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {
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

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['./recipes']);
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.showErrorAlert(errorMessage);
      this.isLoading = false;
    });

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    hostViewContainerRef.createComponent(alertCmpFactory);
  }
}
