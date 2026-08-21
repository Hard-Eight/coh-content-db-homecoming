import { ContactData } from 'coh-content-db'
import { KallistiWharf } from '../zone/kallisti-wharf'

export const AbandonedRobotJunk: ContactData = {
  key: 'abandoned-robot-junk',
  name: 'Abandoned Robot Junk',
  title: 'Bizarre talking Robot',
  morality: 'villainous',
  location: { zoneKey: KallistiWharf.key, coords: [554 -245 5064] },
  levelRange: [40, 50],
  links: [{ title: 'Abandoned Robot Junk', href: 'https://homecoming.wiki/wiki/Abandoned_Robot_Junk' }],
}