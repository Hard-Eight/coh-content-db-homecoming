import { BadgeData } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'

export const VengeanceSeeker: BadgeData = {
  type: 'exploration',
  key: 'vengeance-seeker',
  setTitleId: [2054],
  name: 'Vengeance Seeker',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You stand in the domain of the Talons of Vengeance, the elemental nature of their ancient anger permeates the very air.
Somewhere deep beneath your feet lurks the source of their power and agency on this world; you can feel it flow through you, but you're here to turn that vengeance back on its source.
The Talons must be stopped, they must be punished for their actions, and you shall be the instrument of that vengeance.`,
  notes: `Located in the Forbidden Crags neighborhood, 149 yards southwest of the map marker atop a large hill.`,
  links: [
    { title: 'Vengeance Seeker Badge', href: 'https://homecoming.wiki/wiki/Vengeance_Seeker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirstWard.key, coords: [1444, 219, 3459], icon: 'badge', iconText: '7' } },
  ],
}
