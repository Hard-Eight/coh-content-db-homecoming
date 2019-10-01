import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Buster: IBadgeData = {
    type: BadgeType.EVENT,
    key: "buster",
    names: [
        {value: "Buster"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated 20 ghosts, spirits who have not rested since their original death."},
    ],
    acquisition: "Defeat 20 Spirits during the Halloween event.",
    links: [
        {title: "Buster Badge", href: "https://paragonwiki.com/wiki/Buster_Badge"}
    ],
    imageKeys: [{value: "core.event.buster"}]
};