import styled from "styled-components";

export const Cover = styled.img`
  border-bottom: 4px solid #e2e3e3;
  border-left: 4px solid #e2e3e3;
  height: 300px;
  width: 180px;
  border-radius: 0px 12px 12px 0px;
  margin-bottom: 16px;
`;

export const Author = styled.span`
color: #747878;

font-family: 'Helvetica Neue';
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
margin-bottom: auto;
`

export const Title = styled.span`
  font-family: "Helvetica Neue Condensed";
  color: #191c1c;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 122.222% */
  margin-bottom: 4px;
`;

export const Wrapper = styled.div`
  height: 425px;
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-bottom: 15%;
  display: flex;
  flex-direction: column;
`;
