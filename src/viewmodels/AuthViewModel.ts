import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';

class AuthViewModel {
  email = '';
  password = '';
  firstName = '';
  lastName = '';

  constructor() {
    makeAutoObservable(this);
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  async login() {
    return await AuthService.login(this.email, this.password);
  }

  async register() {
    return await AuthService.register(this.firstName, this.lastName, this.email, this.password);
  }
}

export default new AuthViewModel();
