import React from "react";
import styled from "styled-components";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";

const MemberProfile = () => {
  return (
    <ProfileContainer>
      {/* Personal Details Section */}
      <HeaderSection>
        <Avatar
          src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg"
          alt="Member Avatar"
        />
        <h2>John Doe</h2>
      </HeaderSection>

      {/* Video Container */}
      <SectionHeader>
        <VideoLibraryIcon /> Training Videos
      </SectionHeader>
      <VideoContainer>
        <VideoCard>
          <iframe
            width="200"
            height="120"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Training Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Training Video 1</p>
        </VideoCard>
        <VideoCard>
          <iframe
            width="200"
            height="120"
            src="https://www.youtube.com/embed/5MgBikgcWnY"
            title="Training Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Training Video 2</p>
        </VideoCard>
      </VideoContainer>

      {/* View Session */}
      <SectionHeader>
        <AccountCircleIcon /> View Sessions
      </SectionHeader>
      <SessionContainer>
        <SessionCard>
          <iframe
            width="200"
            height="120"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Session 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Session 1</p>
        </SessionCard>
        <SessionCard>
          <iframe
            width="200"
            height="120"
            src="https://www.youtube.com/embed/L_jWHffIx5E"
            title="Session 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Session 2</p>
        </SessionCard>
        <SessionCard>
          <iframe
            width="200"
            height="120"
            src="https://www.youtube.com/embed/9bZkp7q19f0"
            title="Session 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Session 3</p>
        </SessionCard>
      </SessionContainer>

      {/* View Tournament */}
      <SectionHeader>
        <FitnessCenterIcon /> View Tournament
      </SectionHeader>
      <TournamentContainer>
        <TournamentCard>
          <iframe
            width="200"
            height="120"
            src="https://www.youtube.com/embed/2Vv-BfVoq4g"
            title="Tournament 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Tournament 1</p>
        </TournamentCard>
        <TournamentCard>
          <iframe
            width="200"
            height="120"
            src="https://www.youtube.com/embed/5MgBikgcWnY"
            title="Tournament 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Tournament 2</p>
        </TournamentCard>
        <TournamentCard>
          <iframe
            width="200"
            height="120"
            src="https://www.youtube.com/embed/5MgBikgcWnY"
            title="Tournament 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Tournament 3</p>
        </TournamentCard>
      </TournamentContainer>

      {/* Health Tracking */}
      <SectionHeader>
        <FitnessCenterIcon /> Health Tracking
      </SectionHeader>
      <HealthCard>
        <p>Weight Progress: 80kg -{">"} 75kg</p>
        <ProgressBar>
          <ProgressFill style={{ width: "60%" }} />
        </ProgressBar>
      </HealthCard>

      {/* View Diet Plan */}
      <SectionHeader>
        <AssignmentIcon /> Diet Plan
      </SectionHeader>
      <DietCard>
        <p>Morning: Oats, Eggs</p>
        <p>Afternoon: Chicken, Rice</p>
        <p>Evening: Fish, Veggies</p>
      </DietCard>

      {/* Plan Description */}
      <SectionHeader>
        <AssignmentIcon /> Plan Description
      </SectionHeader>
      <PlanDescription>
        <p>This plan helps improve endurance and muscle strength...</p>
      </PlanDescription>

      {/* Change Subscription Plan */}
      <SectionHeader>
        <SubscriptionIcon /> Change Subscription Plan
      </SectionHeader>
      <ChangePlanCard>
        <p>Current Plan: Gold</p>
        <button>Upgrade to Platinum</button>
      </ChangePlanCard>
    </ProfileContainer>
  );
};

// Styled Components

const ProfileContainer = styled.div`
  margin: 2rem auto;
  padding: 1.5rem;
  margin-top: 150px;
  max-width: 900px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.2rem;
  }
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const SectionHeader = styled.h4`
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  overflow-x: auto; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory; /* Smooth scroll behavior */

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const VideoCard = styled.div`
  min-width: 200px;
  flex-shrink: 0;
  scroll-snap-align: start; /* Snap each card */
  text-align: center;
`;

const SessionContainer = styled(VideoContainer)``;

const SessionCard = styled(VideoCard)``;

const TournamentContainer = styled(VideoContainer)``;

const TournamentCard = styled(VideoCard)``;

const HealthCard = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #76c7c0;
  transition: width 0.3s ease;
`;

const DietCard = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const PlanDescription = styled.div`
  background-color: #e0e0e0;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const ChangePlanCard = styled.div`
  background-color: #e9f5f9;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  button {
    background-color: #00bfae;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 0.5rem;
    &:hover {
      background-color: #64b4a0;
    }
  }
`;

export default MemberProfile;
