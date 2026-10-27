import {
  FaBuilding, FaLaptopCode, FaChurch, FaMapMarkedAlt, FaCode, FaLaptop, FaDatabase,
  FaToolbox, FaUsers, FaRegWindowMaximize, FaNetworkWired, FaCloud,
} from "react-icons/fa";

const map = {
  building: FaBuilding,
  laptop: FaLaptopCode,
  church: FaChurch,
  map: FaMapMarkedAlt,
  code: FaCode,
  database: FaDatabase,
  toolbox: FaToolbox,
  people: FaUsers,
  window: FaRegWindowMaximize,
  laptopPlain: FaLaptop,
  network: FaNetworkWired,
  cloud: FaCloud,
};

export default function Icon({ name, className = "" }) {
  const C = map[name] || FaCode;
  return <C className={className} aria-hidden="true" />;
}