import { BadgeData } from 'coh-content-db'

export const TelevisionAddict: BadgeData = {
  type: 'achievement',
  key: 'television-addict',
  setTitleId: [2075],
  name: 'Television Addict',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `During the raid on TPN Campus, H.D. offered you his assistance in delivering the truth to the world, with only his protection as his price.
You accepted his bargain and delivered far better than would be expected with the IDF swarming the facility, thus ensuring that H.D. had the greatest chance to deliver your message with no interference.`,
  acquisition: 'Complete all four terminals in all three buildings during each 500-point Public Opinion challenge, while also keeping H.D. above 80% health at all times, and then finish the trial.',
  links: [
    { title: 'Television Addict Badge', href: 'https://homecoming.wiki/wiki/Television_Addict_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-tpn.png',
}
