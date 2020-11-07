import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { InitialComponent } from './initial.component';


@NgModule({
    declarations: [
        InitialComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        MatCardModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSnackBarModule       
     ],
     providers: [ ]
})
export class InitialModule { }
