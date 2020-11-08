import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { UserService } from 'src/app/core/user/user.service';

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private userService: UserService) {}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName =>
                    this.userService.checkUserNameTaken(userName)
                ))
                .pipe(map(isTaken => isTaken['data'] ? { userNameTaken: true } : null))
                .pipe(first());
    }
    }

    checkEmailTaken() {

        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName =>
                    this.userService.checkEmailTaken(userName)
                ))
                .pipe(map(isTaken => isTaken['data'] ? { emailTaken: true } : null))
                .pipe(first());
    }
    }
}