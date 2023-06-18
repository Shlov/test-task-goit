import styled from 'styled-components';


export const Card = styled.div`
    width: 280px;
  height: 456px;
  background-color: ${(props) => props.theme === 'day' ? 'var(--cl-almost-white)' : 'var(--cl-black)'};
  box-shadow: var(--shadow-default);
  border-radius: 0px 0px 40px 40px;

  /* user-select: none; */
`