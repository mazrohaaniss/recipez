import React, { useState } from 'react'; // Tambahkan useState di sini
import { FaGoogle, FaFacebook, FaTimes } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState(''); // Gunakan useState untuk email
  const [password, setPassword] = useState(''); // Gunakan useState untuk password
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      onSignIn();
      navigate('/'); // Arahkan ke halaman home setelah sign-in
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  return (
    <SignInContainer>
      <Header>
        <BackArrow onClick={handleBackClick} />
        <Title>RecipeZ</Title>
      </Header>
      <SignInCard>
        <SignInTitle>SIGN IN</SignInTitle>
        <SignInForm onSubmit={handleSubmit}>
          <SignInInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email
          />
          <SignInInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password
          />
          <ForgotPassword>Forgot password?</ForgotPassword>
          <SignInButton type="submit">Sign In</SignInButton>
        </SignInForm>
        <SocialSignIn>
          <p>or sign in with</p>
          <IconContainer>
            <FaGoogle className="icon google-icon" />
            <FaFacebook className="icon facebook-icon" />
            <FaTimes className="icon close-icon" />
          </IconContainer>
        </SocialSignIn>
        <SignUpLink>
          Don’t have an account? <a href="/signup">Sign up</a>
        </SignUpLink>
      </SignInCard>
    </SignInContainer>
  );
};

// Styled Components (same as before)
const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-image: url('/path/to/your/food-grid-background.jpg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.6); 
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const BackArrow = styled(IoIosArrowBack)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  margin-right: 8px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
`;

const SignInCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const SignInTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignInInput = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const ForgotPassword = styled.div`
  color: #007bff;
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 20px;
`;

const SignInButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
`;

const SocialSignIn = styled.div`
  margin-top: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;

  .icon {
    font-size: 1.5rem;
    margin: 0 10px;
    cursor: pointer;
  }

  .google-icon {
    color: #db4437;
  }

  .facebook-icon {
    color: #3b5998;
  }

  .close-icon {
    color: #777;
  }
`;

const SignUpLink = styled.div`
  margin-top: 20px;
  color: #333;
`;

export default SignIn;
