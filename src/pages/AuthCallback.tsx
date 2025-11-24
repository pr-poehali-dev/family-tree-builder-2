import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { sendGoal, Goals } from '@/utils/analytics';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionToken = params.get('session_token');

    if (sessionToken) {
      localStorage.setItem('session_token', sessionToken);
      
      // Отправляем цель успешной авторизации
      sendGoal(Goals.LOGIN_SUCCESS);
      
      // Перенаправляем на главную страницу
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else {
      // Если нет токена, перенаправляем на главную
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Icon name="Check" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Авторизация успешна!</h2>
        <p className="text-muted-foreground">Перенаправляем вас...</p>
      </div>
    </div>
  );
}