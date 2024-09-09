import React, { useState } from "react";
import styled from "styled-components";
import SportsIcon from "@mui/icons-material/Sports";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import PaymentIcon from "@mui/icons-material/Payment";
import EquipmentIcon from "@mui/icons-material/Build";

const GuestProfile = () => {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedSport, setSelectedSport] = useState("");

  const handleSlotChange = (e) => {
    setSelectedSlot(e.target.value);
  };

  const handleBooking = () => {
    if (selectedSlot) {
      setBookingConfirmed(true);
    }
  };

  const handleSportChange = (e) => {
    setSelectedSport(e.target.value);
  };

  return (
    <ProfileContainer>
      <HeaderSection>
        <Avatar
          src="https://img.freepik.com/premium-photo/3d-rendering-soccer-player-action_853677-33133.jpg"
          alt="User Avatar"
        />
        <h2>John Doe</h2>

        <PersonalDetails>
          <p>
            <strong>Age:</strong> 29
          </p>
          <p>
            <strong>Weight:</strong> 80 kg
          </p>
          <p>
            <strong>Height:</strong> 175 cm
          </p>
        </PersonalDetails>
      </HeaderSection>

      {/* View Tournament Section */}
      <SectionHeader>
        <VideoLibraryIcon /> View Tournament
      </SectionHeader>
      <VideoContainer>
        <VideoCard>
          <VideoIframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video URL
            title="Tournament Video 1"
            allowFullScreen
          />
          <p>Tournament Video 1</p>
        </VideoCard>
        <VideoCard>
          <VideoIframe
            src="https://www.youtube.com/embed/3JZ_D3ELwOQ" // Replace with your YouTube video URL
            title="Tournament Video 2"
            allowFullScreen
          />
          <p>Tournament Video 2</p>
        </VideoCard>
      </VideoContainer>

      {/* Tournament Videos Section */}
      <SectionHeader>
        <VideoLibraryIcon /> Tournament Videos
      </SectionHeader>
      <VideoContainer>
        <VideoCard>
          <VideoIframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video URL
            title="Tournament Video 1"
            allowFullScreen
          />
          <p>Tournament Video 1</p>
        </VideoCard>
        <VideoCard>
          <VideoIframe
            src="https://www.youtube.com/embed/3JZ_D3ELwOQ" // Replace with your YouTube video URL
            title="Tournament Video 2"
            allowFullScreen
          />
          <p>Tournament Video 2</p>
        </VideoCard>
      </VideoContainer>

      {/* Booking Hour Section */}
      <SectionHeader>
        <EventIcon /> Booking Hour
      </SectionHeader>
      <BookingContainer>
        <p>Select a time slot:</p>
        <select onChange={handleSlotChange}>
          <option value="" disabled selected>
            -- Select Slot --
          </option>
          <option value="Sept 10, 2024, 4:00 PM">Sept 10, 2024, 4:00 PM</option>
          <option value="Sept 10, 2024, 5:00 PM">Sept 10, 2024, 5:00 PM</option>
          <option value="Sept 11, 2024, 4:00 PM">Sept 11, 2024, 4:00 PM</option>
        </select>

        <button className="booking-btn" onClick={handleBooking}>
          Book Slot
        </button>
        {bookingConfirmed && <p>Your slot is booked for {selectedSlot}!</p>}
      </BookingContainer>

      {/* Select Sport Section */}
      <SectionHeader>
        <SportsIcon /> Select Sport
      </SectionHeader>
      <SportSelectionContainer>
        <p>Select a sport:</p>
        <select value={selectedSport} onChange={handleSportChange}>
          <option value="" disabled>
            -- Select Sport --
          </option>
          <option value="Football">Football</option>
          <option value="Tennis">Tennis</option>
          <option value="Cricket">Cricket</option>
          <option value="Basketball">Basketball</option>
        </select>
        {selectedSport && <p>Selected Sport: {selectedSport}</p>}
      </SportSelectionContainer>

      {/* Payment Section */}
      <SectionHeader>
        <PaymentIcon /> Payment
      </SectionHeader>
      <PaymentContainer>
        <p>Amount Due: $50</p>
        <button>Proceed to Payment</button>
      </PaymentContainer>

      {/* Equipment Section */}
      <SectionHeader>
        <EquipmentIcon /> Equipment
      </SectionHeader>
      <EquipmentContainer>
        <EquipmentCard>
          <EquipmentThumbnail
            src="https://freepngdownload.com/image/thumb/football-icon-png.png"
            alt="Equipment 1"
          />
          <p>Football</p>
        </EquipmentCard>
        <EquipmentCard>
          <EquipmentThumbnail
            src="https://cdn-icons-png.flaticon.com/512/10465/10465938.png"
            alt="Equipment 2"
          />
          <p>Badminton</p>
        </EquipmentCard>
      </EquipmentContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  background-image: url("https://media.istockphoto.com/id/1129308120/photo/green-abstract-background.webp?b=1&s=170667a&w=0&k=20&c=b0rLsidnxgqM947ML-jyFOJ4cWSrlHeL5ZHpEoEoV4M="); /* Replace with your image URL */
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 12px;
  margin-Top:110px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    margin-top: 1rem;
  }

  h3 {
    font-size: 1.2rem;
  }
`;

const PersonalDetails = styled.div`
  margin-top: 1rem;
  p {
    margin: 5px 0;
    font-size: 1rem;
  }
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #f3826f;
`;

const SectionHeader = styled.h4`
  margin-top: 2rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  color: white;

  svg {
    margin-right: 10px;
  }
`;

const TournamentContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const TournamentCard = styled.div`
  text-align: center;
`;

const TournamentThumbnail = styled.img`
  width: 200px;
  height: 120px;
  border-radius: 8px;
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
  text-align: center;
  flex: 0 0 auto;
  scroll-snap-align: start;
`;

const VideoIframe = styled.iframe`
  width: 200px;
  height: 120px;
  border: none;
  border-radius: 8px;
`;

const BookingContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;

  select {
    margin-top: 10px;
    padding: 5px;
    border-radius: 4px;
  }

  .booking-btn {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #f3826f;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f2554f;
    }
  }
`;

const SportSelectionContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;

  select {
    margin-top: 10px;
    padding: 5px;
    border-radius: 4px;
  }
`;

const PaymentContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const EquipmentContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
`;

const EquipmentCard = styled.div`
  text-align: center;
`;

const EquipmentThumbnail = styled.img`
  width: 120px;
  height: 80px;
  border-radius: 8px;
`;

export default GuestProfile;
