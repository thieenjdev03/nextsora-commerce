'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button, Input, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@nextsora/ui';
import { apiClient } from '@nextsora/utils';
import toast from 'react-hot-toast';

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    
    try {
      const response = await apiClient.post('/auth/login', data);
      const { access_token, user } = response.data;
      
      // Store token and user data
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      toast.success('Đăng nhập thành công!');
      
      // Redirect to dashboard or home
      window.location.href = '/';
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Đăng nhập thất bại');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Đăng nhập vào{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NextSora
            </span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Chưa có tài khoản?{' '}
            <Link href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
              Đăng ký ngay
            </Link>
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Đăng nhập</CardTitle>
            <CardDescription>
              Nhập thông tin để truy cập tài khoản của bạn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  {...register('email', {
                    required: 'Email là bắt buộc',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Email không hợp lệ'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Mật khẩu
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  {...register('password', {
                    required: 'Mật khẩu là bắt buộc'
                  })}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Quay lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}