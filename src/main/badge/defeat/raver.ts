import { BadgeData } from 'coh-content-db'

export const Raver: BadgeData = {
  type: 'DEFEAT',
  key: 'raver',
  setTitle: { id: 218 },
  name: [
    { value: 'Raver' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'You have helped clean up the streets of the raving Trolls.' },
    { alignment: 'V', value: 'You crashed, smashed, and bashed the raving Trolls party into the ground.' },
  ],
  acquisition: 'Defeat 50 Glowing Trolls during a Troll Rave',
  links: [
    { title: 'Raver Badge', href: 'https://homecoming.wiki/wiki/Raver_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/raver.png' },
  ],
}
