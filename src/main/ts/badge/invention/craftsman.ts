import { BadgeData } from 'coh-content-db'

export const Craftsman: BadgeData = {
  type: 'invention',
  key: 'craftsman',
  setTitleId: [742],
  name: 'Craftsman',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You are a true Craftsman, and have created 500 inventions.',
  acquisition: 'Craft 500 items in the Invention System or Supergroup Base system.',
  notes: `This includes anything craftable on Invention Worktables, Base Worktables, and Empowerment Stations (including Empowerment Buffs), as well as special crafting such as the Vanguard Crafting Table and Candy Keeper.`,
  links: [
    { title: 'Craftsman Badge', href: 'https://homecoming.wiki/wiki/Craftsman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/craftsman.png',
}
