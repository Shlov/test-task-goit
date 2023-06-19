// import { TweetCard } from "components/TweetCard/TweetCard";
import { NavLink } from "react-router-dom";


export const Main = () => {

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          // fontSize: 30,
          // color: '#010101'
        }}
      >
        <h1>TWEETS</h1>
        <NavLink to='/tweets'>Go to tweets</NavLink>
        {/* <TweetCard/> */}
      </div>
    </>
  );
};