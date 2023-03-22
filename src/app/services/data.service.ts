import { SymfonyResponse, unwrapper } from 'src/helpers/api';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://127.0.0.1:8000'

export enum Gender {
  Male = 'M',
  Female = 'F'
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthday: Date;
  gender: Gender;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public users: User[] = []

  constructor(private http: HttpClient) { 
    this.loadUsers();
  }

  public loadUsers() {
    this.http.get<SymfonyResponse>(`${apiUrl}/api/users`).subscribe((data) => {
      const users = unwrapper(data);
      this.users = users as User[];
    });
  }

  public async loadUser(id: number): Promise<User> {
    const data = await this.http.get<SymfonyResponse>(`${apiUrl}/api/users/${id}`).toPromise() as SymfonyResponse
    const user = unwrapper(data);
    return (user as User);
  }

  public getUsers(): User[] {
    return this.users
  }

  public async getUserById(id: number): Promise<User> {
    const cachedUser = this.users.find((user) => user.id === id) || {} as User
    if(cachedUser && cachedUser.id) {
      return cachedUser
    }

    return await this.loadUser(id)
  }
}
