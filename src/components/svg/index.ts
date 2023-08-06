import { FC } from 'react';
import Arrow from './right-arrow.svg';
import Analyze from './analyze.svg';
import Cart from './cart.svg';
import Clinic from './clinic.svg';
import Close from './close.svg';
import DarkUser from './dark-user.svg';
import Diagnostic from './diagnostic.svg';
import Doctor from './doctor.svg';
import Gastroenterologist from './gastroenterologist.svg';
import Hospital from './hospital.svg';
import Lab from './lab.svg';
import Location from './location.svg';
import Logout from './logout.svg';
import Search from './search.svg';
import Star from './star.svg';
import Time from './time.svg';
import User from './user.svg';

export const SVG = {
  Arrow,
  Analyze,
  Cart,
  Clinic,
  Close,
  DarkUser,
  Diagnostic,
  Doctor,
  Gastroenterologist,
  Hospital,
  Lab,
  Location,
  Logout,
  Search,
  Star,
  Time,
  User,
};

export type SVGNameType = keyof typeof SVG;
export type SVGType = FC<{ width: number; height: number }>;
