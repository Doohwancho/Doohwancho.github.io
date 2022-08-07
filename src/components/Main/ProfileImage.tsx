import React, { FunctionComponent } from 'react'
import styled from '@Emotion/styled'

const PROFILE_IMAGE_LINK =`https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg`; 

const ProfileImageWrapper = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = function () {
        return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
    }

export default ProfileImage
