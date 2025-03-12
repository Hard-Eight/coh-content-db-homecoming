import { BadgeData } from 'coh-content-db'

export const WalkingThePath: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'walking-the-path',
  setTitle: { id: 1424 },
  name: [
    { value: 'Walking the Path' },
  ],
  alignment: ['H', 'V', 'P'],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_align_mission.png' }],
  badgeText: [
    {
      value: 'You strove for what you believe in and, against all odds, came out on top. You\'ve earned the '
        + 'Walking the Path badge by completing your first Alignment Mission.',
    },
  ],
  acquisition: 'Complete an Alignment mission',
  links: [
    { title: 'Walking the Path Badge', href: 'https://homecoming.wiki/wiki/Walking_the_Path_Badge' },
  ],
}
