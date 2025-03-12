import { BadgeData } from 'coh-content-db'
import { NovaPraetoria } from '../../map/nova-praetoria'
import { ImperialCity } from '../../map/imperial-city'
import { Neutropolis } from '../../map/neutropolis'
import { UndergroundNova } from '../../map/underground-nova'
import { UndergroundImperial } from '../../map/underground-imperial'
import { UndergroundNeutropolis } from '../../map/underground-neutropolis'

export const Headjuiced: BadgeData = {
  type: 'HISTORY',
  key: 'headjuiced',
  setTitle: { id: 1413 },
  name: [
    { value: 'Headjuiced' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You followed all the fruity crumbs and peeped the 20 lessons brought to you by the letter 'Resistance.' Whether or not you chomp-a-chomp on this tasty knowing is up to you, but now you know it's time for the other half of the battle.` },
  ],
  links: [
    { title: 'Headjuiced Badge', href: 'https://homecoming.wiki/wiki/Headjuiced_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-p.png' },
  ],
  partials: [
    {
      key: 'head-0',
      type: 'PLAQUE',
      mapKey: NovaPraetoria.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-5337, 17, 834],
      inscription: `Don't Believe Your Eyes - Just because it all looks jim-dandy don't mean that's what's really goin' on. You're dreamin', sleepyhead. Wake yer peepers and you'll see that it's not all sunshine, rainbows, and unicorns havin' a tea party.`,
      notes: `Located 259 yards NE of the South Aetna marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'head-1',
      type: 'PLAQUE',
      mapKey: NovaPraetoria.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-3119, -76, 550],
      inscription: `Don't Believe Everything You Read - Just because it's on a poster don't make it true. Someone got paid a fat wad of cash to put those words in print. And who was handing over those tasty bucks? Surprise! It's COLE! Read between the lines and you might just see his beady little eyes peeping you a good one right back.`,
      notes: `Located 217 yards W of the Imperial Bank of Praetoria.`,
      vidiotMapKey: '2',
    },
    {
      key: 'head-2',
      type: 'PLAQUE',
      mapKey: NovaPraetoria.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-3709, -7, -1769],
      inscription: `The Tunnels Are Your Refuge - Did you wake up and see that wonderland ain't all toothy cats and tea parties? Then go follow Alice down the rabbit hole and take a big ol' chomp from a slice of the tasty, tasty truth.`,
      notes: `Located 163 yards N of the Elyssian Avenue marker. Note that there are two markers for Elyssian Avenue. The plaque is closer to the marker in the NW corner of the zone.`,
      vidiotMapKey: '3',
    },
    {
      key: 'head-3',
      type: 'PLAQUE',
      mapKey: NovaPraetoria.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-5882, -15, -2395],
      inscription: `Your Thoughts Are Not Your Own - Like all that flashy gizmo doodad biotech you see lately? Also like Seers reading your mind? You probably do, since they've been shovin' those thoughts in your scrambled little noggin. Think about that for a for a moment...or can you?`,
      notes: `Located 47 feet NW of Underground Access C.`,
      vidiotMapKey: '4',
    },
    {
      key: 'head-4',
      type: 'PLAQUE',
      mapKey: NovaPraetoria.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-4962, -15, 2567],
      inscription: `The Police Are Not Your Protectors - Sticks and stones will break your bones, and so will the boys in blue and gold. They're here to keep you in line, not help you. You're a squealing little piggie and they're the big bad wolf, got it? And they've got the sticks and stones.`,
      notes: `Located 218 yards S of the Resistance Underground Access location.`,
      vidiotMapKey: '5',
    },
    {
      key: 'head-5',
      type: 'PLAQUE',
      mapKey: ImperialCity.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-2109.7, -28.3, -1656.1],
      inscription: `This is the Cage and You're the Guinea Pig - Praetor Berry is the best propeller-head Praetoria has ever seen. And you're the best test subject he's ever seen, too. Welcome to your new life as a technologically assimilated lab mouse, chomper!`,
      notes: `Located 38 yards N of Underground Access C.`,
      vidiotMapKey: '1',
    },
    {
      key: 'head-6',
      type: 'PLAQUE',
      mapKey: ImperialCity.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-242, -47, -485],
      inscription: `All That Glitters is Not Gold - Like jumpbugging around in a world where the streets are paved with gold? Scratch that surface, chomper, and all that paint crumbles away showin' Cole's mug chortle-snortlin' in your face.`,
      notes: `Located 166 yards SE of Aureas Marker.`,
      vidiotMapKey: '2',
    },
    {
      key: 'head-7',
      type: 'PLAQUE',
      mapKey: ImperialCity.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-2356, -16, -2929],
      inscription: `Behavioral Adjustment = Thought Control - Gotta bugbump in your head and thinking of moseying up to the Behavioral Adjustment Facility for some attitude change? Well, Cole has something in mind for you. Your mind, which he's gonna scamp right out from outta your nose.`,
      notes: `Located 518 yards NE of Logos marker.`,
      vidiotMapKey: '3',
    },
    {
      key: 'head-8',
      type: 'PLAQUE',
      mapKey: ImperialCity.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [590, -55, -1402],
      inscription: `Ghouls = Your Doom - They give you the shivery-wivveries every time you look at them, don't they? It's because you're peeping something that's gonna happen to you if you don't stop Neuron Technology Unlimited. It's unlimited, alright. Can't make a 'perfect' omelet without breaking a few citizens, right?`,
      notes: `Located 268 yards NW of Aureas marker.`,
      vidiotMapKey: '4',
    },
    {
      key: 'head-9',
      type: 'PLAQUE',
      mapKey: ImperialCity.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-2783, -10, 3376],
      inscription: `There is No Mercy at the Psychiatric Hospital - Want a bowlful of brainbugs to slurp down in the morning? Then head on over to that Hospital and join in with those smilies, the Seers. How's that for a recommended daily serving of mercy for ya?`,
      notes: `Located 369 yards SE of the Four Gables waypoint.`,
      vidiotMapKey: '5',
    },
    {
      key: 'head-10',
      type: 'PLAQUE',
      mapKey: Neutropolis.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [1217, -56, -959],
      inscription: `You ARE Being Watched - Did you see that person on the street just disappear around the corner? Where do you think they went? Maybe they were following you? Anyone standing around watching you read this right now? Yeah, chomper, you're finally seeing it.`,
      notes: `Located 438 yards NE of the Neuron's Reach marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'head-11',
      type: 'PLAQUE',
      mapKey: Neutropolis.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [4049, -72, -855],
      inscription: `Don't Drink the Cole-Aid - Got yourself a thirst that needs a-quenching? Chug down a can of Beefy Pop before you even think of slurpin' on that Enriche! Oh yeah!`,
      notes: `Located 344 yards N of the Loyalist's Underground Access point in Lambda Sector Island.`,
      vidiotMapKey: '2',
    },
    {
      key: 'head-12',
      type: 'PLAQUE',
      mapKey: Neutropolis.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [3261, -60, 513],
      inscription: `The Pen IS Mighty, but Swords Leave a Mark - Papa Vagabond always says 'don't bring a pen to a gunfight.' Words will never hurt you, but bullets sure will make you all Mister Swiss Cheese. So get your own and scamp it up!`,
      notes: `Located 207 yards WNW of the Imperial Bank of Praetoria.`,
      vidiotMapKey: '3',
    },
    {
      key: 'head-13',
      type: 'PLAQUE',
      mapKey: Neutropolis.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [6326, -72, 1073],
      inscription: `Knowledge is Power - All those Praetors know this, so you're just gettin' the gristly bits while they're mackin' down on a prime cut of Filet McPower. The truth - take a look, it's in a book.`,
      notes: `Located 501 yds NW of the Keyes Island marker.`,
      vidiotMapKey: '4',
    },
    {
      key: 'head-14',
      type: 'PLAQUE',
      mapKey: Neutropolis.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [5811, -39, 3048],
      inscription: `Be the Revolution - Shut your yaptrap and you'll get pushed outta the way like any other squiggly-zibble. Johnny, get your spine and take it to the Tyrant!`,
      notes: `Located 236 yards SSW of the Keyes Island marker.`,
      vidiotMapKey: '5',
    },
    {
      key: 'head-15',
      type: 'PLAQUE',
      mapKey: UndergroundNova.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-3161, 512, 60],
      inscription: `The Tunnels are a Battleground - Sticking inside stinky shadows is all coolstyle, but you ain't the only chomper down there. Pick on someone your own size and you'll get scamped by anyone. Check your six and you'll be in the pipe five by five, capice?`,
      notes: `Located 61 yards W of the Resistance Surface Access door.`,
      vidiotMapKey: '1',
    },
    {
      key: 'head-16',
      type: 'PLAQUE',
      mapKey: UndergroundImperial.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-1532, 336, -2645],
      inscription: `Beware Things That Go Bump in the Night - Listen up, boiz and ghouls! That bumpity bumpity you hear all the time in the tunnels? Those are Ghouls who are doublestyle lipsmacking thinkin' about mackin' down a helpin' of Hambone. And that Hambone is you, Flippy!`,
      notes: `Located 126 yards N of Sector C Marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'head-17',
      type: 'PLAQUE',
      mapKey: UndergroundImperial.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-819, 272, -5247],
      inscription: `Trust No One - Don't read this message, Chomper! There's all kinds of funkamunch that people are hiding, even signs. Use your brain and you won't obey the fnords!`,
      notes: `Located 367 yards NW of City Access B.`,
      vidiotMapKey: '2',
    },
    {
      key: 'head-18',
      type: 'PLAQUE',
      mapKey: UndergroundNeutropolis.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-1314, -1088, -3627],
      inscription: `Look Up Often - Wanna be confusinated all slipperstyle? Then wait for your friendly neighborhood dropbears to pay you a visit, and they ain't bringin' you any tea and cookies! Keep an eye to the pie in the sky or cry and die. Know what I'm sayin'?`,
      notes: `Located 35 yards E of the Sector B marker. Note that there are two Sector B Markers on the map. The referenced marker is in the yellow zone to the north.`,
      vidiotMapKey: '1',
    },
    {
      key: 'head-19',
      type: 'PLAQUE',
      mapKey: UndergroundNeutropolis.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-987, -1216, -2151],
      inscription: `There's Safety in Hubs - If you wanna be a chomper, stick your snout in the ground and hit the Hubs triple. But if you're a scamper, you, too, can be the next contestant on Yooz Gonna Get Blowed Up All Funstyle!`,
      notes: `Located 67 yards SSW of the Resistance Surface Access.`,
      vidiotMapKey: '2',
    },
  ],
}
