import styled from 'styled-components';


export const TweetsList = styled.div`
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