import { styled } from '@mui/material';

export const StyledPageWebsite = styled('div')`
  color: pink;
`;

export function PageWebsite() {
  return (
    <StyledPageWebsite>
      <h1>Welcome to PageWebsite!</h1>
    </StyledPageWebsite>
  );
}

export default PageWebsite;
