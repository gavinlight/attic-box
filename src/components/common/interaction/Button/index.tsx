import * as i from 'types';
import * as React from 'react';

import { StyledButton, ButtonContent } from './styled';

export const Button: React.FC<i.ButtonProps> = ({
  variant, bold, small, onClick, as = 'button', vague, children, ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      bold={bold}
      small={small}
      as={as}
      {...onClick && {
        onClick,
      }}
      {...props}
    >
      <ButtonContent vague={vague}>
        {children}
      </ButtonContent>
    </StyledButton>
  );
};

export type ButtonProps =
React.ButtonHTMLAttributes<HTMLButtonElement>
& React.AnchorHTMLAttributes<HTMLAnchorElement>
& {
  variant?: 'primary' | 'secondary';
  bold?: boolean;
  vague?: boolean;
  small?: boolean;
  as?: 'a' | 'button';
  onClick?: () => void;
};
