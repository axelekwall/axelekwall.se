import styled from '@emotion/styled';

interface FlexRowProps {
  justify?: string;
}

const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80vw;
  max-width: ${({ theme }): string => theme.contentWidth};
  justify-content: ${({ justify }): string => justify || 'flex-start'};
  margin-top: 24px;
  margin-bottom: 24px;
`;

export default FlexRow;