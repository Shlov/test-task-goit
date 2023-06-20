// import { TweetCard } from "components/TweetCard/TweetCard";
import { NavLink } from "react-router-dom";
import { MainWrapper } from "./Main.styled";


export const Main = () => {

  return(
    <>
      <MainWrapper>
        <NavLink to='/tweets'>Go to tweets</NavLink>
      </MainWrapper>
    </>
  );
};