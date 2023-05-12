import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 0px 4px rgba(52, 52, 53, 0.185);
  border-radius: 10px;
  /* filter: drop-shadow(46px 36px 24px #4090b5)
    drop-shadow(-55px -40px 25px #9e30a9); */
  filter: drop-shadow(#a7a930 111px 37px 49px)
    drop-shadow(#404eb5 -111px -37px 49px);
`;

export const Span = styled.span`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #1a202c;
`;

export const Label = styled.label`
  color: rgb(0, 0, 0);
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 20px;
  width: 100%;
  height: 40px;
  font-size: 1rem;
  color: #4a5568;
  outline: none;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  :focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px #cbd5e0;
  }

  :valid {
    border: 1px solid rgba(14, 14, 14, 0.205);
  }

  :invalid {
    border: 1px solid rgba(14, 14, 14, 0.205);
  }
`;

export const Submit = styled.button`
  background-color: #1a202c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
