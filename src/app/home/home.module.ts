import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.serice';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        HomeComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule,
        MatCardModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSnackBarModule       
     ],
     providers: [ SignUpService ]
})
export class HomeModule { }
