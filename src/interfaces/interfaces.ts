import React from 'react';

export interface iButton {
  as: 'button' | 'a';
  type: 'primary' | 'secondary';
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

export interface iResponse {
  data: {
    results: [];
  };
}

export interface iCharNotTransform {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    items: [
      {
        name: string;
      }
    ];
  };
  urls: [
    {
      url: string;
      type: string;
    }
  ];
}

export interface iChar {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
}

interface iRandomChar {
  char: iChar | null;
  status: string;
}

interface iCharsList {
  chars: iChar[] | [];
  status: string;
  offset: number;
}
interface iCharInfo {
  selectedChar: iChar | null,
  openModal: boolean
}

export interface iInitialState {
  type: string;
  randomChar: iRandomChar;
  charsList: iCharsList;
  charInfo: iCharInfo
}
