import { BadgeData, badgeLink } from 'coh-content-db'
import { SlagReaper } from '../accomplishment/slag-reaper'

export const SlagPile: BadgeData = {
  type: 'GLADIATOR',
  key: 'slag-pile',
  setTitle: { id: 468 },
  name: [
    { value: 'Slag Pile' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'Hmm, maybe these reeking piles of junk are useful.' },
  ],
  acquisition: `Earn the ${badgeLink(SlagReaper)} Badge (Slag Golems)`,
  links: [
    { title: 'Slag Pile Badge', href: 'https://homecoming.wiki/wiki/Slag_Pile_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
