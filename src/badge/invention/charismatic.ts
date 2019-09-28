import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Charismatic: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "charismatic",
    names: [{value: "Charismatic"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 35 and 40: Sleep, Snare, Hold, Stun, Immobilize, and Fear."}],
    links: [
        {title: "Charismatic Badge", href: "https://paragonwiki.com/wiki/Charismatic_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-4"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 35,
            inventionTypes: [EnhancementCategory.SLEEP, EnhancementCategory.SLOW, EnhancementCategory.HOLD, EnhancementCategory.STUN, EnhancementCategory.IMMOBILIZE, EnhancementCategory.FEAR],
            count: 8
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 40,
            inventionTypes: [EnhancementCategory.SLEEP, EnhancementCategory.SLOW, EnhancementCategory.HOLD, EnhancementCategory.STUN, EnhancementCategory.IMMOBILIZE, EnhancementCategory.FEAR],
            count: 8
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
