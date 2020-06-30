import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent {
    
    email = new FormControl('', [Validators.required, Validators.email]);
    senha = new FormControl('', [Validators.required]);
    form: FormGroup = new FormGroup({
        email: this.email,
        senha: this.senha
    });
    
    login(){
        if (this.form.valid) {
            console.log('implementar login');
        }
    }

    getEmailErrorMessage() {
        if (this.email.hasError('required'))
          return 'Obrigátorio informar o e-mail';
        return this.email.hasError('email') ? 'E-mail inválido' : '';
    }

    getSenhaErrorMessage() {
        if (this.senha.hasError('required'))
          return 'Obrigátorio informar a senha';
    }


    /*
    loginForm: FormGroup;
    @ViewChild('userNameInput', { static: true }) userNameInput: ElementRef<HTMLInputElement>;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) { }
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(userName, password)
            .subscribe(
                () => this.router.navigate(['user', userName]),
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.platformDetectorService.isPlatformBrowser() &&
                        this.userNameInput.nativeElement.focus();
                    alert('Invalid user name or password');
                }
            );
    }
    */
}