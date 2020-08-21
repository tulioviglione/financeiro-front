import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { SignUpService } from './signup.serice';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { Usuario } from 'src/app/core/model/usuario.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('emailInput', { static: true }) emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ],
        this.userNotTakenValidatorService.checkEmailTaken()
      ],
      nome: ['',[] 
      ],
      sobrenome: ['', []
      ],
      login: ['', 
      [
        Validators.required,
        Validators.pattern(/^[a-z0-9_\-]+$/),
        Validators.minLength(2),
        Validators.maxLength(30),
      ],
      this.userNotTakenValidatorService.checkUserNameTaken()
    ],
      senha: ['', 
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ]
    ]
    }) 
    this.platformDetectorService.isPlatformBrowser() &&
            this.emailInput.nativeElement.focus(); 
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as Usuario;
    this.signUpService
        .signup(newUser)
        .subscribe(
            () => this.router.navigate(['']),
            err => console.log(err)
        );
  }

}