import styled from 'styled-components';


export const TweetsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const Btn = styled.button`
  width: 240px;
  height: 60px;
  margin-top: 10px;

  background-color: #5736A3;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin: 20px auto;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #EBD8FF;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%), 0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%), inset 0px -0.01em 0px rgb(58 65 111 / 50%);
  transition: box-shadow 0.15s ease, transform 0.15s ease;

  &:hover {
    box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%), 0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #331f62;
    transform: translateY(-0.1em);
  }
  &:active {
    box-shadow: inset 0px 0.1em 0.6em #331f62;
    transform: translateY(0em);
  }

`

export const Message = styled.div`
  width: 240px;
  height: 60px;
  margin: 20px auto;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 32px;
  line-height: 22px;
  color: #373737;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const TitleWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  font-size: 32px;
  line-height: 22px;
  color: #373737;
`

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`