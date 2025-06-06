import { BadgeData } from 'coh-content-db'

export const Sharpshooter: BadgeData = {
  type: 'invention',
  key: 'sharpshooter',
  setTitleId: [789],
  name: 'Sharpshooter',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 45 and 50: Recharge Rate and Interrupt Time.',
  effect: 'Awards +1 to Recipe capacity.',
  links: [
    { title: 'Sharpshooter Badge', href: 'https://homecoming.wiki/wiki/Sharpshooter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 45,
      inventionTypes: ['recharge-reduction', 'interrupt-duration'],
      count: 14,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 50,
      inventionTypes: ['recharge-reduction', 'interrupt-duration'],
      count: 14,
    },
  ],
}
