import { BadgeData } from 'coh-content-db'
import { Imprisoned } from '../achievement/imprisoned'

export const WailerQueen: BadgeData = {
  type: 'gladiator',
  key: 'wailer-queen',
  setTitleId: [458],
  name: 'Wailer Queen',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'What does this creature see in you?',
  links: [
    { title: 'Wailer Queen Badge', href: 'https://homecoming.wiki/wiki/Wailer_Queen_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Imprisoned.key, type: 'badge', badgeKey: Imprisoned.key },
  ],
}
