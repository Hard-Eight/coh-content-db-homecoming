import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../map/skyway-city'

export const BetterDays: BadgeData = {
  type: 'EXPLORATION',
  key: 'better-days',
  setTitle: { id: 1535 },
  name: [{ value: 'Better Days' }],
  alignment: ['H'],
  mapKey: SkywayCity.key,
  loc: [2119, 29, -2378],
  badgeText: [{
    value: 'This statue of the Red Tiger, aka Jake Montoya, was erected after he lost his leg fighting the Clockwork King.'
      + ' Hero Corps supplied Jake with a prosthetic limb afterwards, but he would never be able to fight crime again.'
      + ' Some of his friends worry that Jake spends too much time around this statue, obsessing over his better days.',
  }],
  notes: 'The Better Days Badge is under the statue next to Jake Montoya in Skyway City, 286 yards west of the Architect Entertainment building.',
  links: [
    { title: 'Better Days Badge', href: 'https://homecoming.wiki/wiki/Better_Days_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '5',
}
