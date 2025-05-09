import { BadgeData } from 'coh-content-db'
import { Eden } from '../../zone/eden'

export const NaturalLaw: BadgeData = {
  type: 'exploration',
  key: 'natural-law',
  setTitleId: [1844],
  name: 'Natural Law',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Before you are the steps that once led to the Circuit Court of Woodvale, a bastion of law and order.
But a new law rules here, one with rules as ancient as the planet's core, and in this court all of humanity has been found guilty.`,
  notes: `Located 200 yards south of The Serpentine marker, in the grass in front of a building in a small clearing in the trees.`,
  links: [
    { title: 'Natural Law Badge', href: 'https://homecoming.wiki/wiki/Natural_Law_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Eden.key, coords: [-309, -35, 3891], icon: 'badge', iconText: '5' } },
  ],
}
