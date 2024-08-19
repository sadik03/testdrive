import React from 'react';
import styled from 'styled-components';
import { Fade, Bounce } from 'react-reveal';
import "./CSS/Feature.css";
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Feature = () => {
  return (
    <PageContainer>
      <Fade top>
        <Title>Sports Feature Page</Title>
      </Fade>
      <CardContainer>
        <Bounce>
          <Card>
            <CardImage src="https://via.placeholder.com/300x200" alt="Feature 1" />
            <CardTitle>Feature 1</CardTitle>
            <CardDescription>
              Description for feature 1. This is a placeholder text.
            </CardDescription>
          </Card>
        </Bounce>   <Bounce>
          <Card>
            <CardImage src="https://via.placeholder.com/300x200" alt="Feature 2" />
            <CardTitle>Feature 2</CardTitle>
            <CardDescription>
              Description for feature 2. This is a placeholder text.
            </CardDescription>
          </Card>
        </Bounce>
        <Bounce>
          <Card>
            <CardImage src="https://via.placeholder.com/300x200" alt="Feature 3" />
            <CardTitle>Feature 3</CardTitle>
            <CardDescription>
              Description for feature 3. This is a placeholder text.
            </CardDescription>
          </Card>
        </Bounce>
        <Bounce>
          <Card>
            <CardImage src="https://via.placeholder.com/300x200" alt="Feature 4" />
            <CardTitle>Feature 4</CardTitle>
            <CardDescription>
              Description for feature 4. This is a placeholder text.
            </CardDescription>
          </Card>
        </Bounce>
        <Bounce>
          <Card>
            <CardImage src="https://via.placeholder.com/300x200" alt="Feature 5" />
            <CardTitle>Feature 5</CardTitle>
            <CardDescription>
              Description for feature 5. This is a placeholder text.
            </CardDescription>
          </Card>
        </Bounce>
        <Bounce>
          <Card>
            <CardImage src="https://via.placeholder.com/300x200" alt="Feature 6" />
            <CardTitle>Feature 6</CardTitle>
            <CardDescription>
              Description for feature 6. This is a placeholder text.
            </CardDescription>
          </Card>
        </Bounce>
        
      </CardContainer>
    </PageContainer>
  );
};

export default Feature;
