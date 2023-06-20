import { HeaderEl, StyledLink } from "./Header.styled";

export const Header = () => {

  return (
    <HeaderEl>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </nav>
    </HeaderEl>
  );
};
