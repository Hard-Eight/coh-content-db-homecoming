import { MissionData } from 'coh-content-db'
import { AbandonedRobotJunk } from '../contact/abandoned-robot-junk'

export const PrimeTimeSublime: MissionData = {
  key: 'prime-time-sublime',
  name: 'Prime Time Sublime',
  type: 'story-arc',
  morality: 'villain',
  contactKeys: AbandonedRobotJunk.key,
  levelRange: [40, 50],
  links: [
    { title: 'Prime Time Sublime', href: 'https://homecoming.wiki/wiki/Abandoned_Robot_Junk#Prime_Time_Sublime' },
  ],
  flashback: {
    id: '28.08',
    levelRange: [50],
  },
}
