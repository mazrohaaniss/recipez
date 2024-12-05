import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { TiSocialTwitter } from 'react-icons/ti';

// Base Form Class (Encapsulation)
class FormComponent {
  constructor() {
    this.errors = {}; // Menyimpan error state
  }

  validate() {
    throw new Error('validate() method must be implemented.');
  }
}

// SignUpForm Class 
class SignUpForm extends FormComponent {
  validate(formData) {
    const { username, email, password } = formData;
    let newErrors = {};
    if (!username.trim()) newErrors.username = 'Username is required.';
    if (!email.trim()) newErrors.email = 'Email is required.';
    if (!password.trim()) newErrors.password = 'Password is required.';
    return newErrors;
  }
}

const SignUp = () => {
  const navigate = useNavigate();
  const formInstance = new SignUpForm(); // Inheritance & Polymorphism

  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const validationErrors = formInstance.validate(formData); // Polymorphic validate()
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        navigate('/signin'); 
      }
    } catch (error) {
      console.error('Error during sign-up:', error.message); // Exception Handling
    }
  };

  const SocialButtons = () => (
    <div className="social-buttons">
      <button className="social-button">
        <FaGoogle className="social-icon google-icon" />
      </button>
      <button className="social-button">
        <TiSocialTwitter className="social-icon twitter-icon" />
      </button>
      <button className="social-button">
        <FaFacebook className="social-icon facebook-icon" />
      </button>
    </div>
  );

  return (
    <div className="sign-up-container">
      {/* Back Arrow */}
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <IoIosArrowBack className="back-icon" />
        <span className="back-title">RecipeZ</span>
      </div>

      {/* Sign Up Card */}
      <div className="sign-up-card">
        <h2 className="sign-up-header">SIGN UP</h2>
        <div className="divider"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="sign-up-form">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
            />
            {errors.username && <p className="form-error">{errors.username}</p>}
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
            />
            {errors.password && <p className="form-error">{errors.password}</p>}
          </div>
          <button type="submit" className="submit-button">
            SIGN UP
          </button>
        </form>

        {/* Social Sign Up */}
        <div className="social-sign-up-text">Or sign up with</div>
        <SocialButtons />

        {/* Footer */}
        <div className="footer-text">
          Already have an account?{' '}
          <span className="sign-in-link" onClick={() => navigate('/signin')}>
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

// Add CSS Styles
const styles = `
   .sign-up-container {
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
  }
  .back-arrow {
    position: absolute;
    top: 24px;
    left: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .back-icon {
    font-size: 30px;
    color: #ffffff;
  }
  .back-title {
    margin-left: 8px;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
  }
  .sign-up-card {
    background: #ffffff;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 596px;
    height: 740px;
  }
  .sign-up-header {
    font-size: 50px;
    font-weight: 800; 
    color: #333;
    margin-bottom: 5px;
  }
  .divider {
    width: 244px;
    border: 1px solid #4A628A;
    margin: 0 auto 30px auto;
  }
  .sign-up-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .form-label {
    margin-bottom: 8px;
    color: #333;
    font-weight: bold;
  }
  .form-input {
    width: 438px;
    padding: 12px;
    height: 56px;
    border: 1px solid #ddd;
    border-radius: 20px;
    font-size: 16px;
  }
  .form-error {
    color: #f00;
    font-size: 14px;
    margin-top: 4px;
  }
  .submit-button {
    padding: 12px;
    background-color: #4A628A;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.2rem;
    width: 438px; 
    height: 56px;
    font-weight: bold;
  }
.social-sign-up-text {
  margin-top: 16px;
  color: #666;
  text-align: center; 
}

.social-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.social-button {
  border: 1px solid #ddd;
  background-color: transparent;
  border: none;
  padding: 12px; /* Ukuran padding lebih besar agar ikon tidak terlalu sempit */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.social-icon {
  font-size: 1.8rem; /* Ukuran ikon disesuaikan */
}

.google-icon {
  color: #db4437; 
}

.twitter-icon {
  color: #1da1f2; /* Warna ikon Twitter */
}

.facebook-icon {
  color: #3b5998; /* Warna ikon Facebook */
}

  .footer-text {
    margin-top: 16px;
    color: #666;
  }
  .sign-in-link {
    color: #4A628A;
    cursor: pointer;
    font-weight: bold;
  }

`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default SignUp;