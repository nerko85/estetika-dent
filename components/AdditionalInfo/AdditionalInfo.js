import React from "react";
import styled from "styled-components";

export default function AdditionalInfo({title, desc, list}) {
  return (
    <StyledInfo>
      <div className="container">
        <h1>{title}</h1>
        <p>
          {desc}
        </p>
        {
          list && 
          <ul>
            <h3>{list.title}</h3>
            {
              list.elements.map((item,index)=>(
                <>
                <li>{item}</li>
                </>
              ))
            }
          </ul>
        }
      </div>
    </StyledInfo>
  );
}

const StyledInfo = styled.section`
  margin:8rem 0;
  text-align: center;
  h1 {
    color: ${({ theme }) => theme.gold};
    max-width: 800px;
    margin:0 auto;
    font-size:6rem;
  }
  h3{
    color: ${({ theme }) => theme.gold};
    font-size:3rem;
    margin-bottom:1rem;
  }

  ul{
    list-style:none;
  }

  p {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top:4rem;
  }

  @media(max-width:${({theme})=>theme.tablet}){
    margin:0;
    h1 {
      font-size:3rem;
    }
    h3 {
      font-size:2rem;
    }
  }
`;
