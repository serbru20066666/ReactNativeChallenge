import axios from 'axios';

const API_URL = 'https://gabriel.api.pretii.lat';

class AuthService {
  static async login(email: string, password: string) {
    try {
      const response = await axios.post(`${API_URL}/login/customer`, { email, password });
      console.log('Login response:', response.data);
  
      const { m, s } = response.data;
  
      if (s === 'ok') {
        console.log('Login successful!');
        return response.data;
      } else {
        console.log('Login failed:', m);
        throw new Error(m || 'Login failed');
      }
    } catch (error: any) {
      if (error.response) {
        console.error('Login error (server responded):', error.response.data);
        throw new Error(error.response.data.m || 'Login failed (server error)');
      } else if (error.request) {
        console.error('Login error (no response received):', error.request);
        throw new Error('Login failed (no response)');
      } else {
        console.error('Login error (other):', error.message);
        throw new Error(error.message || 'Login failed');
      }
    }
  }
  

  static async register(firstName: string, lastName: string, email: string, password: string) {
    try {
      const response = await axios.post(`${API_URL}/login/customer/register`, {
        firstName,
        lastName,
        email,
        password,
        countryId: 1,
      });
      console.log('Register response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Register error:', error.response?.data || error.message);
      throw error;
    }
  }

  static async recoverPassword(email: string) {
    try {
      const response = await axios.post(`${API_URL}/login/recovery-password`, { email });
      console.log('Recover Password response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Recover Password error:', error.response?.data || error.message);
      throw error;
    }
  }

  static async getProfile() {
    try {
      const response = await axios.get(`${API_URL}/customer/profile`);
      console.log('Get Profile response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Get Profile error:', error.response?.data || error.message);
      throw error;
    }
  }

  static async updateProfile(firstName: string, lastName: string) {
    try {
      const response = await axios.post(`${API_URL}/customer/update-profile`, {
        first_name: firstName,
        last_name: lastName,
        govern_doc_id: 1,
        countryId: 1,
        cell_phone: '1234567890',
      });
      console.log('Update Profile response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Update Profile error:', error.response?.data || error.message);
      throw error;
    }
  }

  static async deleteAccount() {
    try {
      const response = await axios.delete(`${API_URL}/customer/delete-me`);
      console.log('Delete Account response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Delete Account error:', error.response?.data || error.message);
      throw error;
    }
  }
}

export default AuthService;
