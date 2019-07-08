import styled, { css } from 'styled-components/macro';
import { em, padding, borderRadius, borderWidth } from 'polished';

export interface Props {
  borderWidth?: number | null;
  intent?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'info'
    | 'warning'
    | 'success'
    | null;
  size?: 'small' | 'medium' | 'large' | null;
  variant?: 'rounded' | 'rectangle' | 'rounded-rectangle' | null;
}

const intent = css<Props>(({ intent, theme }) => {
  if (
    intent === 'primary' ||
    intent === 'danger' ||
    intent === 'info' ||
    intent === 'success' ||
    intent === 'warning'
  )
    return {
      backgroundColor: theme.colors.intents[intent],
      borderColor: theme.colors.intents[intent],
      color: theme.colors.common.white
    };
  else if (intent === 'secondary')
    return {
      backgroundColor: theme.colors.intents[intent],
      borderColor: theme.colors.intents[intent],
      color: theme.colors.common.black
    };
  else return { backgroundColor: 'transparent', borderColor: 'transparent' };
});

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(value, max));

const getBoxModel = (
  fontSizeUnitless: number,
  lineHeightUnitless: number,
  borderWidthUnitless: number,
  heightUnitless: number,
  horizontalPaddingUnitless: number,
  baseFontSizeUnitless = 16
) => {
  const boundLineHeight = clamp(lineHeightUnitless, 0, heightUnitless);
  const boundFontSize = clamp(fontSizeUnitless, 0, boundLineHeight);
  const boundPadding = clamp(
    Math.round((heightUnitless - boundLineHeight) / 2),
    0,
    heightUnitless - boundLineHeight
  );
  const boundBorderWidth = clamp(borderWidthUnitless, 0, boundPadding);

  return {
    ...padding(
      em(boundPadding - boundBorderWidth, boundFontSize),
      em(horizontalPaddingUnitless - boundBorderWidth, boundFontSize)
    ),
    borderWidth: boundBorderWidth,
    fontSize: em(boundFontSize, baseFontSizeUnitless),
    lineHeight: em(boundLineHeight, boundFontSize)
  };
};

const size = css<Props>(({ size, theme, borderWidth }) => {
  if (size === 'small')
    return getBoxModel(
      theme.base.fontSize,
      theme.base.fontSize,
      borderWidth!,
      20,
      theme.base.unit * 2
    );
  else if (size === 'medium')
    return getBoxModel(
      theme.base.fontSize,
      theme.base.fontSize,
      borderWidth!,
      30,
      theme.base.unit * 6
    );
  else if (size === 'large')
    return getBoxModel(
      theme.base.fontSize,
      theme.base.fontSize,
      borderWidth!,
      40,
      theme.base.unit * 12
    );
  else
    return getBoxModel(
      theme.base.fontSize,
      theme.base.fontSize,
      borderWidth!,
      theme.base.fontSize,
      0
    );
});

const variant = css<Props>(({ variant, theme, size }) => {
  if (variant === 'rounded')
    return {
      borderRadius: '25% / 100%'
    };
  else if (variant === 'rounded-rectangle')
    return { borderRadius: em(theme.base.borderRadius) };
  else return {};
});

export const Badge = styled.span<Props>`
  border-style: solid;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => props.theme.typography.body};
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  ${intent}
  ${size}
  ${variant}
`;

Badge.defaultProps = {
  borderWidth: 0
};
