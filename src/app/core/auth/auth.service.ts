import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private userService: UserService,
        private router: Router) { }

    authenticate(userName: string, password: string) {
        return this.http
            .post(environment.API_URL + '/auth/authentic', 
                { email: userName,
                  senha: password 
                },
                { observe: 'response'} )//da acesso a resposta
            .pipe(tap(res => {
                const authToken = res.body['data']['token'];//nome do cabeçalho onde esta armazenado o token
                this.userService.setToken(authToken);           
            }))
    }
}