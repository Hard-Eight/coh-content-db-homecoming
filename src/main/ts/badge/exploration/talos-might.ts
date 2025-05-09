import { BadgeData, contactLink } from 'coh-content-db'
import { SafeguardTalosIsland } from '../../zone/safeguard-talos-island'
import { AgentHassell } from '../../contact/agent-hassell'

export const TalosMight: BadgeData = {
  type: 'exploration',
  key: 'talos-might',
  setTitleId: [653],
  name: [
    { alignment: 'hero', value: `Talos' Might` },
    { alignment: 'villain', value: `Talos' Blight` },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `Years ago, Rularuu tore down the barriers between our dimensions and sent one of many invasion forces to this block.
Heroes from all over fought back the invaders.`,
  notes: `Located in the middle of the northernmost alley between the stores that line the central part of the map.

Out-levelled Safeguard missions can be accessed via ${contactLink(AgentHassell)}.`,
  links: [
    { title: `Talos' Might Badge`, href: 'https://homecoming.wiki/wiki/Talos%27_Might_Badge' },
    { title: `Talos' Blight Badge`, href: 'https://homecoming.wiki/wiki/Talos%27_Blight_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SafeguardTalosIsland.key, coords: [-1452, 160, 6739], icon: 'badge', iconText: '1' } },
  ],
}
