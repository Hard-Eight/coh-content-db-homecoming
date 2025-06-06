import { BadgeData } from 'coh-content-db'
import { ApexTaskForce } from '../../mission/apex-task-force'

export const WeaponMaster: BadgeData = {
  type: 'accomplishment',
  key: 'weapon-master',
  setTitleId: [1937],
  name: [
    { sex: 'M', value: 'Weapon Master' },
    { sex: 'F', value: 'Warrior Princess' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You repelled the initial Praetorian invasion forces from Primal Earth and saved what remained of Blyde Square from Battle Maiden!`,
  links: [
    { title: 'Weapon Master Badge', href: 'https://homecoming.wiki/wiki/Weapon_Master_Badge' },
    { title: 'Warrior Princess Badge', href: 'https://homecoming.wiki/wiki/Warrior_Princess_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/weapon-master.png',
  requirements: [
    { key: ApexTaskForce.key, type: 'mission', missionKey: ApexTaskForce.key },
  ],
}
