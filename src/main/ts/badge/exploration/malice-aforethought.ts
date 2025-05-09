import { BadgeData } from 'coh-content-db'
import { TheStormPalace } from '../../zone/the-storm-palace'

export const MaliceAforethought: BadgeData = {
  type: 'exploration',
  key: 'malice-aforethought',
  setTitleId: [1856],
  name: 'Malice Aforethought',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Everything about the Shadow Shard expresses the danger it represents to your home dimension.
This is not some mere foreign power that can be reasoned with or with whom a peaceful settlement can be negotiated.
Its very existence is built upon a hostility towards anything other than itself; malice is ingrained into every particle of its being.
But are you not just projecting your own human-born ideas of good and evil upon it?
Is the wolf acting with malice when it devours the hare? Is it evil for the strong to dominate the weak?`,
  notes: `Located 36 feet west of the Lock of Malice marker.`,
  links: [
    { title: 'Malice Aforethought Badge', href: 'https://homecoming.wiki/wiki/Malice_Aforethought_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheStormPalace.key, coords: [-4971, 453, 7458], icon: 'badge', iconText: '3' } },
  ],
}
