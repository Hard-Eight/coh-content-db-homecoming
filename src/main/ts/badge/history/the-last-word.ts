import { BadgeData } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'

export const TheLastWord: BadgeData = {
  type: 'history',
  key: 'the-last-word',
  setTitleId: [2064],
  name: 'The Last Word',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `A land of notable Firsts and Lasts, the First Ward of Praetoria is flooded not only with mire, magic, and mayhem, but also memorials to its history. You have encountered them all, earning this badge.`,
  links: [
    { title: 'The Last Word Badge', href: 'https://homecoming.wiki/wiki/The_Last_Word_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-p.png',
  requirements: [
    {
      key: 'thel-0',
      type: 'monument',
      location: { zoneKey: FirstWard.key, coords: [-544, 35, -3405], icon: 'plaque', iconText: '1' },
      monumentText: `You are now leaving First Ward! - This is likely your first exposure to an alternate plane of existence.
I don't completely understand what this place is, but it's not Praetoria, even though it looks like it on the surface.
What little I can get out of the Carnival of Light, the ones who created these shadowed paths, this place is a realm created by the collective unconscious, built by memories past and present.
Some call it the Twilight World, a place that exists between "here," the land of the living, and "there" the final destination of the dead.
All I can say is this: follow the lights, don't ever drop your guard, and make haste. We're told the paths are safe, but you can't ever be too careful.`,
      notes: `Located in the Free-Fire Zone neighborhood, 278 yards NNW of the map marker, along the northern wall of the zone in one of the Shadowed Paths.`,
    },
    {
      key: 'thel-1',
      type: 'monument',
      location: { zoneKey: FirstWard.key, coords: [-1148, 32, -3229], icon: 'pedestal', iconText: '2' },
      monumentText: `Orpheus Theater - This Greek theater was built soon after First Ward's founding, an open air pavilion crafted to take advantage of the region's warm spring and summer months.
Cole himself was the master of ceremonies for the theater's opening performance: a full cast reenactment of the comedies of Aristophanes.
In the years to follow, the Praetorian Players would stage everything from A Midsummer Night's Dream to A Streetcar Named Desire to Death of a Salesman, all to rave reviews.
Their great success forever cemented the Orpheus Theater (and its sister facility, The Orpheus Metropolitan) as a home for quality entertainment as mandated by the state.`,
      notes: `Located in the Free-Fire Zone neighborhood, 137 yards southwest of the Underground Imperial City Access map marker, at the edge of the amphitheater with the large star statue.`,
    },
    {
      key: 'thel-2',
      type: 'monument',
      location: { zoneKey: FirstWard.key, coords: [1932, 50, -2635], icon: 'plaque', iconText: '3' },
      monumentText: `Welcome to the Last Word - Congratulations!
If you're reading this it means that the State has deemed you a threat to the fabric of society.
Instead of bemoaning your fate, embrace it as a badge of honor. To be rejected by the bloated corpse of lies and manipulation that is Praetoria is something to be proud of.
Now, I won't lie to you, life in First Ward is difficult at the best of times, but if you're willing to work hard, cooperate with your fellow exiles, and continue the tradition of resistance that likely led you to this place,
you will be able to create something approaching a real life here. No more propaganda, no more mind-altering substances in the water, no more thought crime. Welcome to the last true free people of Praetoria!`,
      notes: `Located in the Eltentown neighborhood, 81 yards SSW of Mistress of Fate, on the north face of the northwest corner of the wall surrounding the Survivor Compound.`,
    },
    {
      key: 'thel-3',
      type: 'monument',
      location: { zoneKey: FirstWard.key, coords: [-472, 48, -2624], icon: 'pedestal', iconText: '4' },
      monumentText: `CTA Terminal 1 - The Cole Transit Authority brings the future of transportation to the people of Praetoria.
With ease and comfort, the loyal citizens of Praetoria will be able to reach any part of First Ward in a matter of minutes, free of charge, courtesy of the Cole Administration.
It is the dream of Marcus Cole, our magnanimous benefactor, that Terminal 1 be the first step in the creation of a transit web linking every part of the Empire; from the smallest town to the largest metropolis.
All hail Chairman Marcus Cole and his indomitable vision for the future of Praetoria!`,
      notes: `Located in the Free-Fire Zone neighborhood, 141 yards due west of the map marker, in front of the entrance to the CTA building.`,
    },
    {
      key: 'thel-4',
      type: 'monument',
      location: { zoneKey: FirstWard.key, coords: [-1090, 49, -2574], icon: 'plaque', iconText: '5' },
      monumentText: `First Ward's True Purpose - At great personal risk I'll be pasting these notes to the outer wall of the D.U.S.T. training facility each time they take the last one down.
Consider it my non-violent thumb in the eye of the State. When Cole and his cronies thought about what to do with First Ward, using the ruins as a training ground for Praetoria's elite soldiers was the ultimate decision.
But what to do about something to use as target practice? That's where you come in.
Yup, that's right, all of you exiles in First Ward have been given the role of insurgents in the D.U.S.T.'s counter-insurgency training.
All I can say is, take to that role with as much gusto as you can muster. You aren't getting out of here, so you might as well make the D.U.S.T. pay.`,
      notes: `Located in the Free-Fire Zone neighborhood, 69 yards ESE of the map marker, on the east wall of a long north-to-south plot.`,
    },
    {
      key: 'thel-5',
      type: 'monument',
      location: { zoneKey: FirstWard.key, coords: [-1990, 44, -2427], icon: 'pedestal', iconText: '6' },
      monumentText: `Football Park - Let it be known that the historical record confirms that at this location, in the year Nineteen-Hundred & Ninety-Five, Chairman Marcus Cole struck the first blow against Hamidon.
Chairman Marcus Cole, ever the exemplar of leadership, stood at the van of an army of liberation dedicated to the defeat of Hamidon and the reclamation of our sovereign lands.`,
      notes: `Located in the Free-Fire Zone neighborhood, 371 yards east and a bit south of the map marker, on the edge of a circular pathway in a park.`,
    },
    {
      key: 'thel-6',
      type: 'monument',
      location: { zoneKey: FirstWard.key, coords: [-1757, 24, -1007], icon: 'pedestal', iconText: '7' },
      monumentText: `The Houkwald Bridge - This bridge commemorates the work of First Ward's chief civil engineer and Chairman Marcus Cole's personal architect: Andries Houkwald.
The aging master architect, born in the Flanders Protectorate, came of age in the Eastern Bloc of pre-war America and shared with Chairman Marcus Cole a love of this land and a desire to see its glory restored
Unfortunately, he passed away not long after First Ward was founded, and so never had the privilege to see Chairman Marcus Cole's dream realized.`,
      notes: `Located in the Mercyview neighborhood, 361 yards NW of Seed Hunter, in the rubble on the south side of the collapsed bridge.`,
    },
    {
      key: 'thel-7',
      type: 'monument',
      location: { zoneKey: FirstWard.key, coords: [-2314, 83, -274], icon: 'plaque', iconText: '8' },
      monumentText: `The Chapel of Enduring Light - May this structure stand as a testament to Chairman Marcus Cole's belief that while the State can provide for its people's bodily sustenance and intellectual satisfaction, spiritual expression is a personal and transcendent desire.
The Chapel was created to give the people of Praetoria a place to reflect on their lives and their place in the universe.
Chairman Marcus Cole, eminent scholar of mankind's history of spiritual belief and a deeply spiritual person, magnanimously offers his people the freedom to express their own spiritual traditions, provided they do not conflict with the larger aims of the State.`,
      notes: `Located in the Mercyview neighborhood, 70 yards north of Seed Hunter, on the gate just north of the Chapel of Enduring Light.`,
    },
    {
      key: 'thel-8',
      type: 'monument',
      location: { zoneKey: FirstWard.key, coords: [-1106, 19, 203], icon: 'plaque', iconText: '9' },
      monumentText: `Even A Broken Clock Is Right Twice a Day! - So Cole is right about some things: Look around you.
This is what Hamidon and the Devouring Earth are capable of. They did this much damage even with nearly a hundred super-powered beings there to combat them.
Cole might be a manipulative, scheming, ruthless bastard, but at least he's able to keep Praetoria stable and free of the kind of destruction you see here.
I still hate the guy: I believe that we can have peace and prosperity without the manipulation, the coercion, the oppression, but you wouldn't be standing here if Cole hadn't beaten back Hamidon's hordes.
If you want to supplant the State, at a minimum you've got to be able to protect the innocent from the kind of death and destruction Hamidon can dish out.`,
      notes: `Located in the Mercyview neighborhood, 69 yards SSW of the Vendor, on the southern face of a destroyed, wall-like structure.`,
    },
    {
      key: 'thel-9',
      type: 'monument',
      location: { zoneKey: FirstWard.key, coords: [2302, 240, 1951], icon: 'plaque', iconText: '10' },
      monumentText: `Merciless Hospital - Where you stand right now, chances are you're in spitting distance from one of the most dangerous people on the planet.
Scared yet? You should be. This pile of bricks before you pre-dates the Praetorian Empire and even though it looks about as lived in as any other building in First Ward, it's a facade, a cleverly crafted illusion that hides its true purpose.
This building sits on top of one of the most extensive high-tech facilities in all of Praetoria, likely on the entire planet.
The Seers are made here, Mother Mayhem lives here, and like with the D.U.S.T. the exiles to First Ward exists as lab mice for Seer mind-reading and thought control programs.
 Oh, and since you're reading this, the Seers know you're here.`,
      notes: `Located in the Mother of Mercy Hospital neighborhood, 115 yards northeast of the map marker, on the north face of the east wing of the hospital.`,
    },
  ],
}
