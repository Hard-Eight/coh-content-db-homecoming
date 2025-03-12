import { BadgeData } from 'coh-content-db'

export const Gardener: BadgeData = {
  type: 'EVENT',
  key: 'gardener',
  setTitle: { id: 2526 },
  name: [
    { value: 'Gardener' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've relived the past by defeating 25 of the old school Circle of Thorns found during the City of Heroes Anniversary Event.` },
  ],
  acquisition: `Defeat 25 old school Circle of Thorns spawned from time capsules during the anniversary event.`,
  links: [
    { title: 'Gardener Badge', href: 'https://homecoming.wiki/wiki/Gardener_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/gardener.png' }],
}
