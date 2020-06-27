import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from 'src/app/core/model/usuario.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class SignUpService {
    
    constructor(private http: HttpClient) {}

    checkUserNameTaken(userName: string) {
        return this.http.get(environment.API_URL + '/auth/usuarios/validaUsuario/' + userName);
    }

    signup(newUser: Usuario) {
        return this.http.post(environment.API_URL + '/auth/usuarios', newUser);
    }
}