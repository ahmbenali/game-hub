import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from "react-icons";
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { Platform } from '~/types';

// const iconMap: { [key: string]: IconType } = {
const iconMap: Record<string, IconType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};


function PlatformIconList({ platforms }: { platforms: Platform[] }) {
  return (
    <HStack my={1}>
      {platforms?.map(({ id, slug }) => (
        <Icon key={id} as={iconMap[slug]} color='gray.500' />
      ))}
    </HStack>
  )
}

export default PlatformIconList