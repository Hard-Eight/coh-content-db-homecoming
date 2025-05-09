import { BadgeData } from 'coh-content-db'

export const Auctioneer: BadgeData = {
  type: 'consignment',
  key: 'auctioneer',
  setTitleId: [817],
  name: 'Auctioneer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've sold 3000 items on the Consignment House.` },
    { alignment: 'villain', value: `You've sold 3000 items on the Black Market.` },
  ],
  acquisition: '3000 total sales of any kind on the consignment houses.',
  links: [
    { title: 'Auctioneer Badge', href: 'https://homecoming.wiki/wiki/Auctioneer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/consignment/auctioneer.png',
}
