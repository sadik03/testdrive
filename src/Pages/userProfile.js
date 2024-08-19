import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Slide } from 'react-reveal';
import Lottie from 'react-lottie';
import animationDataCoach from '../LottieAnimation/coach.json';
import animationChamp from '../LottieAnimation/champ.json';
import poster2 from '../Images/main/poster2.jpg';

const profiles = [
    {
        id: 1,
        type: 'Guest',
        description: 'This is the guest profile description.',
        // animation: animationDataGuest,
    },
    {
        id: 2,
        type: 'Coach',
        description: 'This is the coach profile description.',
        animation: animationDataCoach,
    },
    {
        id: 3,
        type: 'Champ',
        description: 'This is the champ profile description.',
        animation: animationChamp,
    },
];

const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: #f5f5f5;
    min-height: 100vh;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 29px;
`;

const Image = styled.img`
    width: 90%;
    max-width: 700px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeIn 2s ease-in-out;

    @media (min-width: 768px) {
        width: 700px;
        height: 600px;
    }
`;

const ProfileGrid = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    
  
`;

const ProfileCard = styled(Link)`
    background: #fff;
    border:2px solid black;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
    overflow: hidden;
    width: 100%;
    max-width: 300px;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const ProfileType = styled.h2`
    font-size: 1.5rem;
    margin: 10px 0;
    font-family: 'Inter', sans-serif;
`;

const ProfileDescription = styled.p`
    font-size: 1rem;
    color: #555;
    font-family: 'Inter', sans-serif;
`;

const defaultOptions = (animationData) => ({
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
});

const UserProfile = () => {
    return (
        <UserProfileContainer>
            <ImageContainer>
                <Image src={poster2} alt="Profile Image" />
            </ImageContainer>
            <ProfileGrid>
                {profiles.map((profile) => (
                    <Slide key={profile.id} left>
                        <ProfileCard to={`/bookingform/${profile.type.toLowerCase()}`}>
                            {profile.animation && <Lottie options={defaultOptions(profile.animation)} height={150} width={150} />}
                            <ProfileType>{profile.type}</ProfileType>
                            <ProfileDescription>{profile.description}</ProfileDescription>
                        </ProfileCard>
                    </Slide>
                ))}
            </ProfileGrid>
        </UserProfileContainer>
    );
};

export default UserProfile;
