import styled from 'styled-components/macro';
import { margin, padding } from 'polished';

export interface BareListProps {}

export const BareList = styled.ul<BareListProps>`
  list-style: none;
  ${margin(0)}
  ${padding(0)}
`;
