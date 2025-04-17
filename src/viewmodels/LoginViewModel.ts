import { makeAutoObservable } from 'mobx';
import LoginService from '../services/AuthService';

class LoginViewModel {
  email = '';
  password = '';

  constructor() {
    makeAutoObservable(this);
  }

  setEmail = (email: string) => {
    this.email = email;
  };

  setPassword = (password: string) => {
    this.password = password;
  };

  async login() {
    if (!this.email || !this.password) {
      throw new Error('Email and password cannot be empty.');
    }
    return await LoginService.login(this.email, this.password);
  }
}

export default new LoginViewModel();
