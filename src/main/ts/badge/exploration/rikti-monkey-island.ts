import { BadgeData } from 'coh-content-db'
import { MonsterIsland } from '../../zone/monster-island'

export const RiktiMonkeyIsland: BadgeData = {
  type: 'exploration',
  key: 'rikti-monkey-island',
  setTitleId: [1870],
  name: 'Rikti Monkey Island',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `There is a secret to this island of monkeys, that if an infinite number of Rikti Monkeys were placed before an infinite number of typewriters the smell
they'd produce would be unbearable.
It is nearly unbearable here; the Rikti Monkeys chattering non-stop, dropping dung wherever they please, and prancing about with that unnerving rapidity fills you with the urge to kill
every last one of them.
You're going to enjoy pulping their little bodies.`,
  notes: `Located 535 yards southeast of the Cutlass Isles marker, near the tallest tree on the small island in the southeast portion of the zone.`,
  links: [
    { title: 'Rikti Monkey Island Badge', href: 'https://homecoming.wiki/wiki/Rikti_Monkey_Island_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MonsterIsland.key, coords: [-2981, 0, -5449], icon: 'badge', iconText: '3' } },
  ],
}
