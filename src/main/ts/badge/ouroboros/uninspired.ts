import { BadgeData } from 'coh-content-db'

export const Uninspired: BadgeData = {
  type: 'ouroboros',
  key: 'uninspired',
  setTitleId: [923],
  name: 'Uninspired',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 46 and 50 while not using Inspirations.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 46 and 50 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc using no inspirations.',
  links: [
    { title: 'Uninspired Badge', href: 'https://homecoming.wiki/wiki/Uninspired_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/uninspired.png',
}
