import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: white;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  /* outline: none; */
  /* border: ${p => p.theme.borders.bold + p.theme.colors.accent}; */
  border: none;
  /* border-radius: 5px; */
  display: block;
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    /* border-color: ${p => p.theme.colors.accent}; */
  }
`;

export const MainContainer = styled.div`
  height: 100vh;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(100, 200, 200, 1) 100%
  );
  animation: AnimateBG 10s ease infinite;

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  /* box-shadow: 3px 3px 14px ${p => p.theme.colors.secondary}; */
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* padding: ${p => p.theme.space[4]}px; */
  /* background: linear-gradient(to right, , white); */
  /* background-color: ${p => p.theme.colors.white}; */
  /* border: ${p => p.theme.borders.normal}; */
  /* border-radius: ${p => p.theme.radii.sm}; */
  margin: 0 auto;
  /* width: 450px; */
  @media (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    width: 480px;
  }
`;

export const SectionContainer = styled.div`
  padding: 0 ${p => p.theme.space[3]}px;
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  margin-top: 4px;
  display: block;
  /* width: 320px; */
  &:focus {
    outline-color: ${p => p.theme.colors.accent};
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 12px 0;
  /* border-radius: 4px; */
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: 500;
  display: inline-block;
  &.active {
    color: ${p => p.theme.colors.accent};
    /* background-color: ${p => p.theme.colors.secondary}; */
  }
`;

export const Section = styled.section`
  padding: ${p => p.theme.space[4]}px 0;
`;
