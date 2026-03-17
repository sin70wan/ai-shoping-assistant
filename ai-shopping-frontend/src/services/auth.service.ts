import api from './api';
import { LoginDto, RegisterDto, AuthResponse, User } from '../types/auth';
class AuthService {
  async register(data: RegisterDto): Promise<AuthResponse> {
    const response = await api.post('/auth/register', data);
    return response.data;
  }

  async login(data: LoginDto): Promise<AuthResponse> {
    const response = await api.post('/auth/login', data);
    return response.data;
  }

  async getProfile(): Promise<User> {
    const response = await api.get('/auth/profile');
    return response.data;
  }

  async logout(): Promise<void> {
    await api.post('/auth/logout');
  }

  saveAuthData(token: string, user: User): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export default new AuthService();