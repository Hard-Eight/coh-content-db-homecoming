import { BadgeData } from 'coh-content-db'

export const Zealous: BadgeData = {
  type: 'veteran',
  key: 'zealous',
  setTitleId: [628],
  name: 'Zealous',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've gained fifteen Veteran levels protecting Rhode Island's jewel, Paragon City.` },
    { alignment: 'villain', value: `You've gained fifteen Veteran levels chewing bubblegum and kicking butt. You ran out of gum a long time ago.` },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-15.png',
  acquisition: 'Reach Veteran level 15.',
}
