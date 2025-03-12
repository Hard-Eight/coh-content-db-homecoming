import { BadgeData } from 'coh-content-db'

export const DroneProtector: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'drone-protector',
  setTitle: { id: 1759 },
  name: [
    { value: 'Drone Protector' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You managed to protect all the police drones during the Praetorian\'s invasion of Kings Row.' },
    {
      alignment: 'V', value: 'You ensured that none of the police drones in Kings Row were were destroyed by the '
        + 'Praetorians. You can think of plenty of other uses for them, especially if you could swipe one '
        + 'for yourself.',
    },
  ],
  acquisition: 'Ensure no drones are defeated in the first mission of the Apex Task Force',
  links: [
    { title: 'Drone Protector Badge', href: 'https://homecoming.wiki/wiki/Drone_Protector_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-tinmage.png' },
  ],
}
