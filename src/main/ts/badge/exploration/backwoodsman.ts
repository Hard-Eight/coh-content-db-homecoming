import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const Backwoodsman: BadgeData = {
  type: 'exploration',
  key: 'backwoodsman',
  setTitleId: [195],
  name: 'Backwoodsman',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `These woods have cropped up at an alarming rate since the Hollowing. Many believe the dramatic growth rate of the trees is due to the area being saturated with mystical residue from the Circle's spells.`,
  notes: `Roughly 697 yards S-SE from the Eastgate Heights' marker.`,
  links: [
    { title: 'Backwoodsman Badge', href: 'https://homecoming.wiki/wiki/Backwoodsman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheHollows.key, coords: [-2150, 42, 3332], icon: 'badge', iconText: '4' } },
  ],
}
