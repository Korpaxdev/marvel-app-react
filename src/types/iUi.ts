import React from 'react';

export interface iButton {
  as: 'button' | 'a';
  type: string;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface iMenu {
  showMenu: boolean;
  closeMenu: () => void;
}

export interface iBurgerMenu {
  showMenu: boolean;
  closeMenu: () => void;
  openMenu: () => void;
}
