import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Reanimator: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "reanimator",
    names: [{value: "Reanimator"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 45 and 50: Heal."}],
    effect: "+1 to Recipe capacity",
    links: [
        {title: "Reanimator Badge", href: "https://paragonwiki.com/wiki/Reanimator_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-5"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 45,
            inventionTypes: [EnhancementCategory.HEALING],
            count: 9
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 50,
            inventionTypes: [EnhancementCategory.HEALING],
            count: 9
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};