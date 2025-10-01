import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaLock, FaUser } from "react-icons/fa";

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const LoginHeader = styled.div`
  background-color: #212529;
  padding: 1.5rem;
  text-align: center;
  color: white;
`;

const LoginTitle = styled.h1`
  font-size: 1.75rem;
  margin: 0;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
`;

const LoginSubtitle = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const LoginForm = styled.form`
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
  font-size: 0.95rem;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:focus-within {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const InputIcon = styled.div`
  padding: 0.75rem;
  background-color: #f8f9fa;
  color: #6c757d;
  border-right: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: none;
  outline: none;
  font-size: 1rem;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const ForgotPassword = styled.div`
  text-align: center;
  margin-top: 1rem;
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  
  // Check if user is already logged in
  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (isAdminLoggedIn === 'true') {
      navigate('/admin');
    }
  }, [navigate]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    // Validate form
    if (!formData.username || !formData.password) {
      setError("Please enter both username and password");
      setIsLoading(false);
      return;
    }
    
    // Simulate authentication process
    setTimeout(() => {
      // For demonstration purposes, let's use a hardcoded admin/admin credential
      if (formData.username === "admin" && formData.password === "admin") {
        // In a real application, you would set authentication tokens here
        localStorage.setItem("isAdminLoggedIn", "true");
        navigate("/admin");
      } else {
        setError("Invalid username or password");
      }
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <LoginContainer>
      <LoginCard>
        <LoginHeader>
          <LoginTitle>KÔYA Admin</LoginTitle>
          <LoginSubtitle>Restaurant Management System</LoginSubtitle>
        </LoginHeader>
        
        <LoginForm onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <FormGroup>
            <FormLabel>Username</FormLabel>
            <InputGroup>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <FormInput 
                type="text" 
                name="username" 
                value={formData.username} 
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </InputGroup>
          </FormGroup>
          
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <FormInput 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </InputGroup>
          </FormGroup>
          
          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </LoginButton>
          
          <ForgotPassword>
            <a href="#reset-password">Forgot password?</a>
          </ForgotPassword>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
};

export default AdminLogin;
