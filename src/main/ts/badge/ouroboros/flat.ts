import { BadgeData } from 'coh-content-db'

export const Flat: BadgeData = {
  type: 'ouroboros',
  key: 'flat',
  setTitleId: [918],
  name: 'Flat',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 20 and 24 while not using Inspirations.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 20 and 24 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 21-25 Flashback story arc using no inspirations.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Flat Badge', href: 'https://homecoming.wiki/wiki/Flat_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/flat.png',
}
