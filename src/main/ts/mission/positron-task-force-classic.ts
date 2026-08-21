import { MissionData } from 'coh-content-db'
import { Positron } from '../contact/positron'

export const PositronTaskForceClassic: MissionData = {
  key: 'positron-task-force-classic',
  name: 'Positron Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: Positron.key,
  levelRange: [10, 15],
  links: [
    { title: 'Old Positron Task Force', href: 'https://homecoming.wiki/wiki/Old_Positron_Task_Force' },
  ],
}
