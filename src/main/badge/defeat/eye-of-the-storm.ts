import { BadgeData } from 'coh-content-db'

export const EyeOfTheStorm: BadgeData = {
  type: 'DEFEAT',
  key: 'eye-of-the-storm',
  setTitle: { id: 1435 },
  name: [
    { value: 'Eye of the Storm' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'Maelstrom crossed the line and had to be stopped. Thankfully you were there to prevent things '
        + 'from getting out of hand.',
    },
    { alignment: 'V', value: 'Maelstrom fell before your might. Perhaps now he will learn to not meddle in your schemes.' },
  ],
  acquisition: 'Defeat Maelstrom in an Alignment Mission or a Morality Mission',
  links: [
    { title: 'Eye of the Storm Badge', href: 'https://homecoming.wiki/wiki/Eye_of_the_Storm_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/eye-of-the-storm.png' },
  ],
}
