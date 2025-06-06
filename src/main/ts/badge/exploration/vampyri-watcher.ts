import { BadgeData } from 'coh-content-db'
import { StrigaIsle } from '../../zone/striga-isle'

export const VampyriWatcher: BadgeData = {
  type: 'exploration',
  key: 'vampyri-watcher',
  setTitleId: [1790],
  name: 'Vampyri Watcher',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `The Council's Vampyri corps are a breed apart from the rest of the Council's cadre—both in appearance and temperament.
They hold themselves above their brethren and have taken this high hilltop as their own private roost,
a place providing them a tactical view of the Council base and its surroundings, while also giving them a physical location that they alone command.
Other Council know never to go there lest they incite the ire of their temperamental brothers-in-arms.`,
  notes: `Located 464 yards NNE of The Wolf's Throat marker, at the top of the hill.`,
  links: [
    { title: 'Vampyri Watcher Badge', href: 'https://homecoming.wiki/wiki/Vampyri_Watcher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StrigaIsle.key, coords: [-3728, 424, -3011], icon: 'badge', iconText: '8' } },
  ],
}
