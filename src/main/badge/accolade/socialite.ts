import { BadgeData } from 'coh-content-db'
import { Clubber } from '../day-job/clubber'
import { FashionDesigner } from '../day-job/fashion-designer'

export const Socialite: BadgeData = {
  type: 'ACCOLADE',
  key: 'socialite',
  setTitle: { id: 1070 },
  name: [
    { value: 'Socialite' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `Your popularity and your fashion sense have earned you the Socialite Accolade.  While logged out in Pocket D or a Tailor you will earn charges for your Beguile power.` },
  ],
  links: [
    { title: 'Socialite Badge', href: 'https://homecoming.wiki/wiki/Socialite_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/socialite.png' },
  ],
  partials: [
    { key: Clubber.key, type: 'BADGE', badgeKey: Clubber.key },
    { key: FashionDesigner.key, type: 'BADGE', badgeKey: FashionDesigner.key },
  ],
}
