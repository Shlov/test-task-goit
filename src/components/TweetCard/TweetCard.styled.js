import styled from 'styled-components';


export const Card = styled.div`
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
  left: 92px;
  top: 374px;
  margin-top: 10px;

  background-color: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
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

