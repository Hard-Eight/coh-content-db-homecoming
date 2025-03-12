import { BadgeData } from 'coh-content-db'

export const SentinelSmasher: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'sentinel-smasher',
  setTitle: { id: 2165 },
  name: [
    { value: 'Sentinel Smasher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Diabolique thought she had ensured that the Sentinel could be prepared for any situation '
        + 'simply by absorbing the powers of the heroes she had captured. In a display of confidence or '
        + 'hubris, you decided to make a point by giving the Sentinel its best possible chance of '
        + 'defeating your league. Even in this dangerous state, you achieved victory over the Sentinel '
        + 'during Dilemma Diabolique.',
    },
  ],
  acquisition: 'Defeat the Sentinel after rescuing four specific heroes during the Dilemma Diabolique Trial',
  links: [
    { title: 'Sentinel Smasher Badge', href: 'https://homecoming.wiki/wiki/Sentinel_Smasher_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-dea.png' },
  ],
}
