import { BadgeData } from 'coh-content-db'
import { Neutropolis } from '../../zone/neutropolis'

export const UrbanRenewal: BadgeData = {
  type: 'exploration',
  key: 'urban-renewal',
  setTitleId: [1730],
  name: 'Urban Renewal',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Older sections of the city like this pre-date much of Emperor Cole's reign, and as such have not been renovated to match the rest of the city.
Constant distractions and sabotage by the Resistance and others have delayed such work indefinitely.`,
  notes: `Located 438 yards NW of the Lambda Sector marker.`,
  links: [
    { title: 'Urban Renewal Badge', href: 'https://homecoming.wiki/wiki/Urban_Renewal_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Neutropolis.key, coords: [6356, -64, -1206], icon: 'badge', iconText: '8' } },
  ],
}
