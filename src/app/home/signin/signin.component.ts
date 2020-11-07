import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
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

    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    constructor(private snackBar: MatSnackBar,
        private router: Router,
        private auth: AuthService) {}

    openSnackBar(alert: string, mensage: string) {
        this.snackBar.open(alert,mensage , {
            duration: 1500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    
    login(){
        if (this.form.valid) {
            this.openSnackBar('Aguarde!','Validando Acesso');
            this.auth.authenticate(this.form.get('email').value, this.form.get('senha').value).subscribe(
                () => {
                    this.openSnackBar('Autorizado', 'Redirecionando');
                    this.router.navigate(['initial']);
                },
                err => {
                    console.log(err);
                    this.form.reset();
                    this.openSnackBar('Não Autorizado', 'Usuário ou senha inválido');
                }
            );
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