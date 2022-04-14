import React from 'react';
import { TCharUrlType } from './chars/charsTransformTypes';

export type TButton = {
  as: 'button' | 'a';
  type: TCharUrlType;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export type TMenu = {
  showMenu: boolean;
  closeMenu: () => void;
};

export type TBurgerMenu = {
  showMenu: boolean;
  closeMenu: () => void;
  openMenu: () => void;
};
