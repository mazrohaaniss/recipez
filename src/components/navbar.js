import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = ({ isSignedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Apakah Anda yakin ingin logout?");
    if (confirmLogout) {
      localStorage.removeItem("user"); // Menghapus data pengguna dari localStorage
      navigate("/homepage"); // Pindah ke halaman homepage setelah logout
      window.location.reload(); // Memaksa halaman untuk ter-refresh
    }
  };
  

  // Hide Navbar on SignIn and SignUp pages
  if (location.pathname === '/signin' || location.pathname === '/signup') {
    return null;
  }

  return (
    <Header>
      <h1 className="text-3xl font-bold text-blue-600">RecipeZ</h1>

      {isSignedIn ? (
        <NavLinks>
          <StyledLink to="/" active={location.pathname === '/'}>
            Home
          </StyledLink>
          <StyledLink
            to="/collection"
            active={
              location.pathname === '/collection' ||
              location.pathname.includes('/detailcollection')
            }
          >
            Recipe Collection
          </StyledLink>
          <StyledLink to="/create-recipe" active={location.pathname === '/create-recipe'}>
            Create a Recipe
          </StyledLink>
        </NavLinks>
      ) : (
        <NavActions>
          <Link to="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button variant="solid">Sign Up</Button>
          </Link>
        </NavActions>
      )}

    {isSignedIn && (
      <ProfileContainer>
        <ProfileIcon onClick={toggleDropdown}>
          <span>L</span>
        </ProfileIcon>
        {isDropdownOpen && (
          <Dropdown isOpen={isDropdownOpen}>
            <DropdownItem to="/profile">Lihat Profil</DropdownItem>
            <DropdownItem to="/my-recipes">My Recipe</DropdownItem>
            <DropdownButton onClick={handleLogout}>Logout</DropdownButton>
          </Dropdown>
        )}
      </ProfileContainer>
    )}
    </Header>
  );
};

export default Navbar;

// Styled Components (diletakkan di bawah kode)
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f0f9ff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? '#2563eb' : '#4b5563')};
  &:hover {
    color: #2563eb;
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 0.375rem;
  border: ${(props) =>
    props.variant === 'outline' ? '1px solid #2563eb' : 'none'};
  background-color: ${(props) =>
    props.variant === 'outline' ? 'white' : '#2563eb'};
  color: ${(props) =>
    props.variant === 'outline' ? '#2563eb' : 'white'};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.variant === 'outline' ? '#2563eb' : '#1e3a8a'};
    color: white;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
`;

const ProfileIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #2563eb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0;
  width: 12rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  overflow: hidden;
  z-index: 10;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: #4b5563;
  text-decoration: none;
  &:hover {
    background-color: #f3f4f6;
    color: #2563eb;
  }
`;

const DropdownButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  background: none;
  border: none;
  color: #4b5563;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
    color: #dc2626;
  }
`;
