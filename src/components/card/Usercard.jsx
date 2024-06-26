import React from "react";
import styled from "styled-components";

const Usercard = ({ username, userIntro, profileImage }) => {
  return (
    <UsercardContainer>
      <UserWrapper>
        <Username>{username}</Username>
        <UserIntro>{userIntro}</UserIntro>
      </UserWrapper>
      <ProfileImage src={profileImage} alt="Profile Image" />
    </UsercardContainer>
  );
};

const UsercardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  height: 95px;
`;

const UserWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

const Username = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const UserIntro = styled.div`
  font-size: 12px;
  margin-top: 15px;
  color: #666;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 50px;
`;

export default Usercard;
