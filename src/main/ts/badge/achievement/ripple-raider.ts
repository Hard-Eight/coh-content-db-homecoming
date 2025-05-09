import { BadgeData } from 'coh-content-db'
import { DrAeon } from '../../contact/dr-aeon'

export const RippleRaider: BadgeData = {
  type: 'achievement',
  key: 'ripple-raider',
  setTitleId: [2479],
  name: 'Ripple Raider',
  releaseDate: '2020-11-26',
  morality: 'villainous',
  badgeText: `You've shown yourself to be incredibly adaptable by overcoming every threat found in the familiar-yet-different dimensional ripples Golden Roller tossed your team into without a single defeat being suffered by your team.`,
  acquisition: `Conquer all three challenge encounters within Golden Roller's dimensional ripples in a single attempt in ${DrAeon}'s Strike Force.`,
  notes: `
This includes defeating the specific archvillains listed below:

* Nosferatu
* Arakhn
* Maestro
* Protean
* Emperor Requiem
* Gale
* Tundra
* Slate
* Quill
* Terra, the All-Mother
* Hero 1
* Incandescent`,
  links: [
    { title: 'Ripple Raider Badge', href: 'https://homecoming.wiki/wiki/Ripple_Raider_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sf-aeon.png',
}
