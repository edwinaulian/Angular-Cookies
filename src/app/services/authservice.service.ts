
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private username = 'edwin';
    private password = 'edwin';
    isloggedin = false;
    constructor(private http: HttpClient) { }
    checkLogValues(value: User): boolean {
        if (this.username === value.username && this.password === value.password) {
            console.log(this.username);
            console.log(this.password);
            // alert('Login valid');  
            return true;
        } else {
            alert('please enter valid data');
            return false;
        }
    }
}

export class User {
    username: string;
    password: string;
} 