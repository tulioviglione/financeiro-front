import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
    selector: 'app-header',
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html'   
})
export class HeaderComponent implements OnInit, OnDestroy { 

    private _userSubscription: Subscription

    user: User;

    constructor(
            private userService: UserService,
            private router: Router){ }
    
    ngOnInit(): void {
        this._userSubscription = this.userService.get().subscribe(data => {
            this.user = data;
        });
    }

    logout(){
        this.userService.logout();
        this.user = null;
        this.router.navigate(['']);
    }

    hasUser() {
        return this.user != null;
    }

    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
}