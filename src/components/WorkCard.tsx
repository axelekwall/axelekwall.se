import React, { FC } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { styled } from '../styles/styled';
import { navigate } from 'gatsby';

interface Props {
  img: FluidObject;
  slug: string;
}

const Row = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  ${({ theme }): string => theme.media.phone} {
    flex-direction: column-reverse;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  max-width: 400px;
  ${({ theme }): string => theme.media.phone} {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
  width: 100%;
  ${({ theme }): string => theme.media.phone} {
    flex-direction: row-reverse;
    padding: 0;
  }
`;

const Text = styled.h3`
  font-family: ${({ theme }): string => theme.fonts['sans']};
`;

const ProfileCard: FC<Props> = ({ img, children, slug }) => {
  return (
    <Row
      onClick={(): void => {
        navigate(slug);
      }}
    >
      <ImageWrapper>
        <Img fluid={img}></Img>
      </ImageWrapper>
      <TextWrapper>{children}</TextWrapper>
    </Row>
  );
};

export default ProfileCard;