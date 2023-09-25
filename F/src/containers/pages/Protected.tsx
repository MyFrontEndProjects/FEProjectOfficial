import React, { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedProps {
  children: ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra xem có thông tin người dùng trong localStorage không
    if (!localStorage.getItem('user-info')) {
      // Nếu không có thông tin người dùng, điều hướng đến trang đăng ký
      navigate('/register');
    }
  }, [navigate]);

  return <>{children}</>;
};

export default Protected;
