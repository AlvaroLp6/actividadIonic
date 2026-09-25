import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Pereira', email: 'Pereira@gmail.com', active: true },
    { id: 2, name: 'Agustin', email: 'Agustin@gmail.com', active: false },
    { id: 3, name: 'Auron', email: 'Auron@gmail.com', active: true }
  ];

  async getUsers(): Promise<User[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.users), 500);
    });
  }

  async getActiveUsers(): Promise<User[]> {
    const users = await this.getUsers();
    return users.filter(u => u.active);
  }

  async getUserById(id: number): Promise<User | undefined> {
    const users = await this.getUsers();
    return users.find(u => u.id === id);
  }
}