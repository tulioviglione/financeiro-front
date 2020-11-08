import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { User } from './user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario.model';
import { GenericService } from 'src/app/shared/service/generic.service';

@Injectable({ providedIn: 'root' })
export class UserService extends GenericService {

    private static user = new User();
    private static observable : BehaviorSubject<User> = new BehaviorSubject<User>(UserService.user);

    constructor(
        private tokenService: TokenService,
        private http: HttpClient) { 
        super();
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    get():BehaviorSubject<User>{
        return UserService.observable;
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }
    decodeAndNotify() {
        const token = this.tokenService.getToken();
        UserService.user = jwt_decode(token) as User; //<- (aqui a chamada jwt_decode)
        UserService.observable.next(UserService.user);
    }

    logout() {
        this.tokenService.removeToken();
        UserService.user = null;
        UserService.observable.next(UserService.user);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }

    checkUserNameTaken(userName: string) {
        return this.http.get(environment.API_URL + '/api/usuarios/validaUsuario/' + userName);
    }

    checkEmailTaken(email: string) {
        return this.http.get(environment.API_URL + '/api/usuarios/validaEmail/' + email);
    }

    signup(newUser: Usuario) {
        return this.http.post(environment.API_URL + '/api/usuarios', newUser);
    }
}