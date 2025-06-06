import { BadgeData } from 'coh-content-db'

export const Obligated: BadgeData = {
  type: 'ouroboros',
  key: 'obligated',
  setTitleId: [892],
  name: 'Obligated',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 35 and 39 while only using your Primary and Secondary powersets.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 35 and 39 while only using your Primary and Secondary powersets.` },
  ],
  acquisition: 'Complete a level 36-40 Flashback story arc using no pool powers.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Obligated Badge', href: 'https://homecoming.wiki/wiki/Obligated_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/obligated.png',
}
