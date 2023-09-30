import { FC } from 'react';
import Arrow from './right-arrow.svg';
import Analyze from './analyze.svg';
import Cart from './cart.svg';
import Clinic from './clinic.svg';
import Close from './close.svg';
import DarkUser from './dark-user.svg';
import Diagnostic from './diagnostic.svg';
import Doctor from './doctor.svg';
import Hospital from './hospital.svg';
import Lab from './lab.svg';
import Location from './location.svg';
import Logout from './logout.svg';
import Search from './search.svg';
import Star from './star.svg';
import Time from './time.svg';
import User from './user.svg';
import Cross from './cross.svg';
import Message from './message.svg';
import Portfolio from './portfolio.svg';
import DoctorMan from './doctor-man.svg';
import Map from './map.svg';
import Burger from './burger.svg';
import Home from './home.svg';
import Phone from './phone.svg';

const SVGObject = {
  Arrow,
  Analyze,
  Cart,
  Clinic,
  Close,
  DarkUser,
  Diagnostic,
  Doctor,
  Hospital,
  Lab,
  Location,
  Logout,
  Search,
  Star,
  Time,
  User,
  Cross,
  Message,
  Portfolio,
  DoctorMan,
  Map,
  Burger,
  Home,
  Phone,
};

export type SVGNameType = keyof typeof SVGObject;
export type SVGType = FC<{ width?: number | string; height?: number | string; className?: string }>;

export const SVG = SVGObject as Record<SVGNameType, SVGType>;
