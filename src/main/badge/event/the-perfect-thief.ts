import { BadgeData } from 'coh-content-db'

export const ThePerfectThief: BadgeData = {
  type: 'EVENT',
  key: 'the-perfect-thief',
  setTitle: { id: 2250 },
  name: [
    { value: 'The Perfect Thief' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You performed the role of the Thief in the Summer Blockbuster \'Casino Heist\' perfectly.' },
  ],
  acquisition: 'In the Summer Blockbuster, perform the role of the Thief perfectly.',
  notes: 'Awarded to all team-members.\n'
    + '# Walkthrough\n'
    + '## Phase 1\n'
    + 'Get all four items needed. (Counting from the left as you face the window, the items are in the first, third, fourth, and seventh glowies.)\n'
    + '## Phase 2\n'
    + 'Navigate through the laser maze and then click the glowie vault pad in the vault area once the Grifter\'s success causes it to light up',
  links: [
    { title: 'The Perfect Thief Badge', href: 'https://homecoming.wiki/wiki/The_Perfect_Thief_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/the-perfect-thief.png' }],
}
