import React from 'react';
import { Dispatch } from 'redux';

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

export interface iUrlNotTransform {
  url: string;
  type: string;
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
  urls: iUrlNotTransform[];
}

export interface iUrl {
  label: string;
  url: string;
  type: string;
}

export interface iChar {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  links: iUrl[];
  comics: string[]
}

export interface iRandomChar {
  char: iChar | null;
  status: string;
}

export interface iCharsList {
  chars: iChar[] | [];
  status: string;
  offset: number;
  isEnded: boolean;
}

export interface iCharInfo {
  selectedChar: iChar | null;
  isOpen: boolean;
}

export interface iAction {
  type?: string;
  payload?: any;
}

export interface iRequest {
  url: string;
  dispatch: Dispatch;
  statusAction: (status: string) => { type: string };
}
