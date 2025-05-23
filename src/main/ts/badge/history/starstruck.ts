import { BadgeData } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const Starstruck: BadgeData = {
  type: 'history',
  key: 'starstruck',
  setTitleId: [1408],
  name: 'Starstruck',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Seeing the statues of the rulers of Praetoria is awe-inspiring, truly a must for any loyal citizen.`,
  links: [
    { title: 'Starstruck Badge', href: 'https://homecoming.wiki/wiki/Starstruck_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-p.png',
  requirements: [
    {
      key: 'star-0',
      type: 'monument',
      location: { zoneKey: NovaPraetoria.key, coords: [-5220, 44, -257], icon: 'pedestal', iconText: '1' },
      monumentText: `Emperor Cole - Our Mighty and Most Beneficent Leader - Look now upon the face of your benefactor.
His eyes cast always to the horizon of our collective prosperity, Emperor Marcus Cole bravely stands at the vanguard to vouchsafe our security.
"I call upon you, people of Praetoria, to cast aside all doubt and fear, to carry up your brothers and sisters so that all may stand tall and proud.
Hold your head up high and challenge the darkness to cloud our growing dawn, for it is the fires of our righteous cause that shall carry the day."`,
      notes: `Located in front of the statue of Emperor, 117 yards E of the Magisterium marker.`,
    },
    {
      key: 'star-1',
      type: 'monument',
      location: { zoneKey: NovaPraetoria.key, coords: [-4125, 33, -807], icon: 'pedestal', iconText: '2' },
      monumentText: `Praetor Barry - Better living through chemistry - Praetoria stands as a shining example of mankind's technological prowess.
Without it our enemies, envious of our prosperity and embittered by our success, would have long ago made slaves of us all.
Under the masterful direction of our most enlightened Emperor Marcus Cole, Praetoria's leading scientist has devoted himself to the betterment of the State and its people.
Only through the guiding intellect of our august Emperor Marcus Cole, Praetor Barry has brought peace, comfort, ease, and relief from toil enjoyed by all Praetorians everywhere.`,
      notes: `Located in front of the statue of Neuron, 308 yards NW of the Magisterium marker.`,
    },
    {
      key: 'star-2',
      type: 'monument',
      location: { zoneKey: NovaPraetoria.key, coords: [-3836, 36, -257], icon: 'pedestal', iconText: '3' },
      monumentText: `Praetor Duncan - The pursuit of liberty requires sacrifice - What are you prepared to lose?
Our masterful leader Emperor Marcus Cole has taught us that history is one of our greatest tools.
A tool we use to build the foundation of our present and the framework of our future.
Praetor Duncan stands as an example of the power of history carrying into the present day, as the daughter of Miss Liberty she bears that proud heritage forward,
continuing the tradition of service and sacrifice so that we may all have lives of comfort and safety without fear of destruction at the hand of our implacable enemies.`,
      notes: `Located in front of the statue of Dominatrix, 344 yards W of the Magisterium marker.`,
    },
    {
      key: 'star-3',
      type: 'monument',
      location: { zoneKey: NovaPraetoria.key, coords: [-5602, 41, 316], icon: 'pedestal', iconText: '4' },
      monumentText: `Praetor Sinclair - Only through social engineering can we keep the sheep from becoming the wolves -
Few can match the love and devotion our masterful general and benefactor Emperor Marcus Cole feels for every last citizen of Praetoria, but of that few Praetor Sinclair is at the forefront.
Our tireless guardian is ever watchful for threats to the peace and security of Praetoria and its people.
There are none to whom the magnanimous Emperor Marcus Cole would entrust such an important task as this but the hunter without equal: Praetor Sinclair.`,
      notes: `Located in front of the statue of Chimera, 309 yards SE of the Magisterium marker.`,
    },
    {
      key: 'star-4',
      type: 'monument',
      location: { zoneKey: NovaPraetoria.key, coords: [-4133, 33, 296], icon: 'pedestal', iconText: '5' },
      monumentText: `Praetor Tilman: "Mother" - Mother is here for you. She will keep you safe.
- As our loving and protective Emperor Marcus Cole is the father of our great nation, so Praetor Tilman is the comforting mother who nurtures her many children: the people of Praetoria for who's welfare she has dedicated her life.
Her piercing gaze sweeps aside the veils of deception that hide the enemies of our glorious nation, securing a lasting peace for all Praetorians.
So devoted is she, that she has given to us her daughters, our dedicated Seers, so that impure thoughts are never given a chance to become unlawful deeds.`,
      notes: `Located in front of the statue of Mother Mayhem, 306 yards SW of the Magisterium marker.`,
    },
    {
      key: 'star-5',
      type: 'monument',
      location: { zoneKey: NovaPraetoria.key, coords: [-5649, 33, -843], icon: 'pedestal', iconText: '6' },
      monumentText: `Praetor White - Maintain the order and conformity of Praetoria - Praetor White is the mailed fist of Praetoria, throttling the life from its enemies.
Our most mighty Emperor Marcus Cole's greatest weapon against injustice and tyranny.
All people everywhere do justly praise their warrior protector, who's sacrifice of flesh, bone, and blood has ensured our continued prosperity.
Under the unerring generalship of our great and dear master Emperor Marcus Cole, Praetor White will forever stand steadfast against all threats to our national prosperity.
Beloved warrior and selfless soldier, Praetor White shall never falter in the face of our enemies.`,
      notes: `Located in front of the statue of Marauder, 326 yards NE of the Magisterium marker.`,
    },
  ],
}
