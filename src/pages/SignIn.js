import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { TiSocialTwitter } from 'react-icons/ti';
import styled from 'styled-components';

// Encapsulation: FormComponent sebagai Parent Class
class FormComponent {
  constructor() {
    this.errors = {}; // Menyimpan error state
  }

  validate() {
    throw new Error('validate() method must be implemented.');
  }
}

// SignInForm Class menggunakan Encapsulation & Exception Handling
class SignInForm extends FormComponent {
  validate(formData) {
    const { username, password } = formData;
    let errors = {};
    if (!username.trim()) errors.username = 'Username is required.';
    if (!password.trim()) errors.password = 'Password is required.';
    return errors;
  }
}

const SignIn = ({ onSignIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const formInstance = new SignInForm(); // Instance Form

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const validationErrors = formInstance.validate(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors); // Menyimpan error ke state
      } else {
        localStorage.setItem('user', JSON.stringify({ username: formData.username })); // Menyimpan data user
        onSignIn(); // Callback setelah berhasil
        navigate('/'); // Redirect
      }
    } catch (error) {
      console.error('Sign-in error:', error.message); // Exception Handling
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear error
  };


  const handleBackClick = () => {
    navigate(-1); // Navigate back
  };

  return (
    <SignInContainer>
      <Header>
        <BackArrow onClick={handleBackClick} />
        <Title>RecipeZ</Title>
      </Header>
      <SignInCard>
        <SignInTitle>SIGN IN</SignInTitle>
        <Divider />
        <SignInFormElement onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <SignInInput
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error-text">{errors.username}</p>}
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <SignInInput
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </FormGroup>
          <SignInButton type="submit">SIGN IN</SignInButton>
        </SignInFormElement>
        <ForgotPassword>Forgot password?</ForgotPassword>
        <SocialSignIn>
          <p>Or sign in with</p>
          <IconContainer>
            <FaGoogle className="icon google-icon" />
            <FaFacebook className="icon facebook-icon" />
            <TiSocialTwitter className="icon twitter-icon" />
          </IconContainer>
        </SocialSignIn>
        <SignUpLink>
          Don’t have an account? <a href="/signup">Sign up</a>
        </SignUpLink>
      </SignInCard>
    </SignInContainer>
  );
};

// Styled Components (Styling Tetap Sesuai)
const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #e3f2fd;
  background-image: url('https://blogger.googleusercontent.com/img/a/AVvXsEifPwccPsRNlw_BOO3PFlxpPB4dYEDz8GT_sA0Lten7zu83Il-7zNvqYF2gvk3NdQPduvXgMdkQqL7VLyDmydZJ8HfkRPtn-HN2RRnljY1Y0FbHj1o-YzX_porj3QiNpQGQam4DaiOThS2_VrjklPlS8kXPoJ37G-VFzJTZggWrIUeuPoXuWuuW8jy0n18=w625-h445');
  background-size: cover;
  background-position: center;
  position: relative;
  font-family: 'Raleway', sans-serif;  
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 24px;
  left: 24px;
`;

const BackArrow = styled(IoIosArrowBack)`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;    
  font-size: 30px;
  color: #ffffff;
`;

const Title = styled.h1`
  margin-left: 32px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

const SignInCard = styled.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 596px;
  height: 700px;
`;

const SignInTitle = styled.h2`
  font-size: 50px;
  font-weight: 800;
  color: #333;
  margin-bottom: 5px;
`;

const Divider = styled.hr`
  width: 244px;
  border: 1px solid #4A628A;
  margin: 0 auto 30px auto;
`;

const SignInFormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: #333;
  font-weight: bold;
`;

const SignInInput = styled.input`
  width: 438px;
  padding: 12px;
  height: 56px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 16px;
`;

const SignInButton = styled.button`
  padding: 12px;
  background-color: #4A628A;
  margin-top: 12px;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  width: 438px;
  height: 56px;
`;

const ForgotPassword = styled.div`
  color: #4A628A;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 12px;
  text-align: right;
  margin-right: 60px;
`;

const SocialSignIn = styled.div`
  margin-top: 30px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .icon {
    font-size: 1.8rem;
    margin: 0 15px;
    cursor: pointer;
  }

  .google-icon {
    color: #db4437;
  }

  .facebook-icon {
    color: #3b5998;
  }

  .twitter-icon {
    color: #1da1f2;
  }
`;

const SignUpLink = styled.div`
  margin-top: 20px;
  color: #333;

  a {
    color: #4A628A;
    font-weight: bold;
    text-decoration: none;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export default SignIn;