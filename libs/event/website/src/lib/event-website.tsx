import { StyledPageWebsite } from '@emotion-test/page/website';
import { styled } from '@mui/material';
import { PropsWithChildren } from 'react';

export const StyledEventWebsite = styled('div')`
  color: pink;

  ${StyledPageWebsite} {
    color: #f00 !important;
  }
`;

console.log(StyledPageWebsite);

export function EventWebsite(props: PropsWithChildren<{ a?: string }>) {
  return (
    <StyledEventWebsite>
      <h1>Welcome to EventWebsite!</h1>

      {props.children}
    </StyledEventWebsite>
  );
}

export default EventWebsite;
