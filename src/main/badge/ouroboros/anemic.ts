import { BadgeData } from 'coh-content-db'

export const Anemic: BadgeData = {
  type: 'OUROBOROS',
  key: 'anemic',
  setTitle: { id: 927 },
  name: [
    { value: 'Anemic' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 20 and 24 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 20 and 24 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 21-25 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Anemic Badge', href: 'https://homecoming.wiki/wiki/Anemic_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/anemic.png' }],
}
