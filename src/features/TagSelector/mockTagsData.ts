import type { Tag } from './types';

export const exampleTags: Tag[] = [
  {
    id: '1',
    name: 'Moda vintage',
    description: 'Styl i ubiór minionych dekad',
    primaryIcon: 'tabler:hanger',
    secondaryIcon: 'tabler:scissors',
    color: '#E8B4B4' // Soft dusty pink
  },
  {
    id: '2',
    name: 'Antyczne meble',
    description: 'Klasyczne wzornictwo i rzemiosło',
    primaryIcon: 'tabler:armchair',
    secondaryIcon: 'tabler:wood',
    color: '#B0A786' // Olive sage
  },
  {
    id: '3',
    name: 'Literatura klasyczna',
    description: 'Ponadczasowe dzieła i autorzy',
    primaryIcon: 'mdi:book-open-variant',
    secondaryIcon: 'mdi:quill',
    color: '#8E6C60' // Faded terracotta
  },
  {
    id: '4',
    name: 'Fotografia',
    description: 'Dawne aparaty i techniki',
    primaryIcon: 'mdi:camera',
    secondaryIcon: 'mdi:film',
    color: '#7A9EA8' // Dusty teal
  },
  {
    id: '5',
    name: 'Wydarzenia historyczne',
    description: 'Momenty kształtujące dzieje',
    primaryIcon: 'mdi:castle',
    secondaryIcon: 'mdi:scroll',
    color: '#CEB992' // Antique gold
  },
  {
    id: '6',
    name: 'Płyty winylowe',
    description: 'Muzyka na winylu i gramofony',
    primaryIcon: 'mdi:record-player',
    secondaryIcon: 'mdi:music-note',
    color: '#A17C6B' // Faded brown
  }
] as const;
