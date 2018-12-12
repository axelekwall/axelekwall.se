import styled from '@emotion/styled';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: ${({ theme }) => theme.contentWidth};
  justify-content: flex-start;
  margin-top: 20vh;
  ${({ theme }) => theme.media.phone} {
    margin-top: 10vh;
  }
`;

export default ContentWrapper;
