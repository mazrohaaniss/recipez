import React, { useState } from 'react'; // Tambahkan useState di sini
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Hapus Twitter dari sini
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Update import untuk logo Twitter terbaru (X)
import { TiSocialTwitter } from 'react-icons/ti';

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState(''); // Gunakan useState untuk username
  const [password, setPassword] = useState(''); // Gunakan useState untuk password
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      localStorage.setItem('user', JSON.stringify({ username })); // Update dengan username
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
        <Divider />
        <SignInForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <SignInInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <SignInInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password
            />
          </FormGroup>
          <SignInButton type="submit">SIGN IN</SignInButton>
        </SignInForm>
        <ForgotPassword>Forgot password?</ForgotPassword>
        <SocialSignIn>
          <p>Or sign in with</p>
          <IconContainer>
            <FaGoogle className="icon google-icon" />
            <FaFacebook className="icon facebook-icon" />
            <TiSocialTwitter className="icon twitter-icon" /> {/* Update logo Twitter */}
          </IconContainer>
        </SocialSignIn>
        <SignUpLink>
          Don’t have an account? <a href="/signup">Sign up</a>
        </SignUpLink>
      </SignInCard>
    </SignInContainer>
  );
};

// Styled Components
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
margin-left:32px;
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
  font-weight: 800; /* Extra bold untuk SIGN IN */
  color: #333;
  margin-bottom: 5px; /* Jarak kecil antara SIGN IN dan border */
`;

const Divider = styled.hr`
  width: 244px;
  border: 1px solid #4A628A;
  margin: 0 auto 30px auto; /* Jarak dekat ke SIGN IN dan jauh ke elemen berikutnya */
`;

const SignInForm = styled.form`
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
  margin-botton: 8px;
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
  padding: 12px; /* Padding disamakan dengan input */
  background-color: #4A628A;
  margin-top: 12px;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  width: 438px; /* Ukuran button sama dengan input */
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
  margin-top:20px;

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
    margin-left: 5px; /* Jarak antara teks biasa dan tautan */
    cursor: pointer;
}
`;

export default SignIn;
