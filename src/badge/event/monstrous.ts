import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Monstrous: IBadgeData = {
    type: BadgeType.EVENT,
    key: "monstrous",
    names: [
        {value: "Monstrous"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The colossal Greater Mystic Aspect proved to be no match for your might."},
    ],
    acquisition: "Defeat the Greater Mystic Aspect during a Deadly Apocalypse.",
    links: [
        {title: "Monstrous Badge", href: "https://paragonwiki.com/wiki/Terror_Badge"}
    ],
    imageKeys: [{value: "core.event.monstrous"}]
};