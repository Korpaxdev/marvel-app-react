import React from 'react';

export type TButton = {
  as: 'button' | 'a';
  type: string;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export type TMenu = {
  showMenu: boolean;
  closeMenu: () => void;
}

export type TBurgerMenu = {
  showMenu: boolean;
  closeMenu: () => void;
  openMenu: () => void;
}
