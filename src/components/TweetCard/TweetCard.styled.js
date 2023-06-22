// import styled from 'styled-components';
import styled, { keyframes, css } from 'styled-components';

const topBubbles = keyframes`
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
`;

const bottomBubbles = keyframes`
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
  }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
`;


export const Card = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

`

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 214px;

`
export const Image = styled.img`
  width: 308px;
  height: 168px;
  margin-top: 28px;
  /* position: relative; */
`

export const Logo = styled.div`
  width: 76px;
  height: 22px;
  position: absolute;
  top: 20px;
  left: 20px;

`

export const AvatarWrapper = styled.div`
  /* position: relative; */
  display: flex;
  height: 8px;
  justify-content: center;
  align-items: center;

  background-color: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`
export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin: 0;
`

export const DescrWrapper = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;

  height: 248px;
  flex-direction: column;
  align-items: center;
  gap: 16px;

`
export const Btn = styled.button`
  width: 196px;
  height: 50px;
  margin-top: 10px;
  background-color: ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  display: inline-block;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')};

  &:focus {
    outline: 0;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }

  &:before {
    display: none;
    top: -75%;
    background-image: radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 30%),
      radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%),
      radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 15%, transparent 20%),
      radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%),
      radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%),
      radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%),
      radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
  }

  &:after {
    display: none;
    bottom: -75%;
    background-image: radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%),
      radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 15%, transparent 20%),
      radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%),
      radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%),
      radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%),
      radial-gradient(circle, ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')} 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
  }

  &:active {
    transform: scale(0.9);
    background-color: darken(${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')}, 5%);
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
  }


  /* ${props => {props.animate && 
    css`
    &:before {
      display: block;
      animation: ${topBubbles} ease-in-out 0.75s forwards;

    }
    &:after {
      display: block;
      animation: ${bottomBubbles} ease-in-out 0.75s forwards;
    }
    `
  }
    } */


    ${props => props.animate && css`
    &:before {
      display: block;
      animation: ${topBubbles} ease-in-out 0.75s forwards;
    }
    &:after {
      display: block;
      animation: ${bottomBubbles} ease-in-out 0.75s forwards;
    }
  `}

  &.animate {
    &:before {
      display: block;
      animation: ${topBubbles} ease-in-out 0.75s forwards;
    }
    &:after {
      display: block;
      animation: ${bottomBubbles} ease-in-out 0.75s forwards;
    }
  }

`

export const Txt = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #EBD8FF;
`

