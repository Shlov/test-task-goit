import styled from "styled-components";


export const SkeletonItem = styled.div`
  width: 380px;
  height: 460px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-color: #e2e5e7;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
  background-size: 120px 100%;
  background-repeat: no-repeat;
  background-position: left -120px top 0;
  animation: shine 1s ease infinite;

  @keyframes shine {
    to {
      background-position: right -40px top 0;
    }
  }
`


export const SkeletonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
`