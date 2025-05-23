import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const MediaJunky: BadgeData = {
  type: 'exploration',
  key: 'media-junky',
  setTitleId: [270],
  name: 'Media Junky',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `The top of the WSPDR building is a great place to survey Recluse's media empire.`,
  notes: `Located atop the large WSPDR tower east of the New Haven marker, next to the eastern antenna.`,
  links: [
    { title: 'Media Junky Badge', href: 'https://homecoming.wiki/wiki/Media_Junky_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CapAuDiable.key, coords: [-894, 248, -1458], icon: 'badge', iconText: '2' } },
  ],
}
