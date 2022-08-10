import React, { FunctionComponent } from 'react'
import styled from '@Emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

//const PROFILE_IMAGE_LINK =`https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg`; 

const ProfileImageWrapper = styled(GatsbyImage)`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage
}) {
        return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
    }

export default ProfileImage
