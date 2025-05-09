import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Oppressor: BadgeData = {
  type: 'pvp',
  key: 'oppressor',
  setTitleId: [574],
  name: 'Oppressor',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You have helped defeat Ms. Liberty in Recluse's Victory.`,
  acquisition: `Defeat Ms. Liberty in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Oppressor Badge', href: 'https://homecoming.wiki/wiki/Oppressor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/defeatstatesman.png',
}
