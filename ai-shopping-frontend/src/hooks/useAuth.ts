'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import authService from '../services/auth.service';
import { LoginDto, RegisterDto, User } from '../types/auth';

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkAuth = async () => {
    const token = authService.getToken();
    const storedUser = authService.getUser();
    
    if (token && storedUser) {
      setUser(storedUser);
      try {
        const profile = await authService.getProfile();
        setUser(profile);
      } catch (err) {
        authService.clearAuthData();
        setUser(null);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (data: LoginDto) => {
    setError(null);
    setLoading(true);
    try {
      const response = await authService.login(data);
      authService.saveAuthData(response.token, response.user);
      setUser(response.user);
      router.push('/');
      return response;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterDto) => {
    setError(null);
    setLoading(true);
    try {
      const response = await authService.register(data);
      authService.saveAuthData(response.token, response.user);
      setUser(response.user);
      router.push('/');
      return response;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      authService.clearAuthData();
      setUser(null);
      router.push('/auth/login');
    }
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    checkAuth,  // <-- THIS IS CRITICAL
    isAuthenticated: !!user,
  };
};