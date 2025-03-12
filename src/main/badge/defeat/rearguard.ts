import { BadgeData } from 'coh-content-db'

export const Rearguard: BadgeData = {
  type: 'DEFEAT',
  key: 'rearguard',
  setTitle: { id: 2488 },
  name: [
    { value: 'Rearguard' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've fought past their advanced energy weapons and broken through their enchanted Impervium armor to reach an understanding of why Vanguard truly are one of the most powerful forces on Earth... Aside from you of course.` },
  ],
  acquisition: `Defeat 200 Vanguard Sword or Vanguard Shield.`,
  links: [
    { title: 'Rearguard Badge', href: 'https://homecoming.wiki/wiki/Rearguard_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/rearguard.png' },
  ],
}
