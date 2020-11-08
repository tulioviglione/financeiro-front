import { Component, OnInit } from "@angular/core";
import { UserService } from '../core/user/user.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    
    constructor(private userService: UserService){ }

    isLogged(): boolean {
        return (this.userService.isLogged())?false:true;
    }

 }
