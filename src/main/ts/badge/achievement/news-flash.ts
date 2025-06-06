import { BadgeData } from 'coh-content-db'

export const NewsFlash: BadgeData = {
  type: 'achievement',
  key: 'news-flash',
  setTitleId: [2073],
  name: 'News Flash',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You managed to successfully complete each major broadcast to the people of Praetoria within a few minutes, establishing to the world that Tyrant's Imperial forces are no obstacle to the Incarnates
and their mission to deliver the truth to the people during the raid on TPN Campus.`,
  acquisition: 'Complete all three 500-point Public Opinion challenges, taking no more than 8 minutes per challenge, and then finish the TPN Campus Trial.',
  links: [
    { title: 'News Flash Badge', href: 'https://homecoming.wiki/wiki/News_Flash_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-tpn.png',
}
