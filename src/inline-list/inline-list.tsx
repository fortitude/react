import styled from 'styled-components/macro';
import { margin, padding } from 'polished';

export interface InlineListProps {}

export const InlineList = styled.ul<InlineListProps>`
  list-style: none;
  ${margin(0)}
  ${padding(0)}

  & > li {
    display: inline-block;
  }
`;
