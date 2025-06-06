import { BadgeData } from 'coh-content-db'

export const PraetoriasSon: BadgeData = {
  type: 'accolade',
  key: 'praetorias-son',
  setTitleId: [1658],
  name: [
    { sex: 'M', value: `Praetoria's Son` },
    { sex: 'F', value: `Praetoria's Daughter` },
  ],
  releaseDate: '2012-11-30',
  morality: 'praetorian',
  badgeText: `Praetoria is your world, for better or worse.`,
  acquisition: `Awarded on initial login of a Praetorian-origin character.`,
  links: [
    { title: `Praetoria's Son Badge`, href: 'https://homecoming.wiki/wiki/Praetoria%27s_Son_Badge' },
    { title: `Praetoria's Daughter Badge`, href: 'https://homecoming.wiki/wiki/Praetoria%27s_Daughter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/char-creation.png',
}
