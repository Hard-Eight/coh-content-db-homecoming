import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const HitMan: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "hit-man",
    names: [{value: "Hit-Man"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 25 and 30: Recharge Rate and Interrupt Time."}],
    effect: "+2 to Invention Salvage capacity",
    links: [
        {title: "Hit-Man Badge", href: "https://paragonwiki.com/wiki/Hit-Man_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-3"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 25,
            inventionTypes: [EnhancementCategory.RECHARGE_REDUCTION, EnhancementCategory.INTERRUPT_DURATION],
            count: 8
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 30,
            inventionTypes: [EnhancementCategory.RECHARGE_REDUCTION, EnhancementCategory.INTERRUPT_DURATION],
            count: 8
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
