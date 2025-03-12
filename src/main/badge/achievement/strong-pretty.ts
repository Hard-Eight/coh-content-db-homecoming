import { BadgeData } from 'coh-content-db'

export const StrongPretty: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'strong-pretty',
  setTitle: { id: 1978 },
  name: [
    { value: 'Strong & Pretty' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Siege and Nightstar are the real threat at the Behavioral Adjustment Facility, but you added '
        + 'insult to injury by depriving them of all their War Works allies prior to administering the '
        + 'final simultaneous blow.',
    },
  ],
  acquisition: 'Defeat Siege & Nightstar while none of their reinforcements are alive during a Behavioral Adjustment Facility Incarnate Trial',
  links: [
    { title: 'Strong & Pretty Badge', href: 'https://homecoming.wiki/wiki/Strong_%26_Pretty_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-baf.png' },
  ],
}
