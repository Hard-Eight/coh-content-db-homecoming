import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Mender: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "mender",
    names: [{value: "Mender"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 15 and 20: Heal."}],
    links: [
        {title: "Mender Badge", href: "https://paragonwiki.com/wiki/Mender_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-2"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 15,
            inventionTypes: [EnhancementCategory.HEALING],
            count: 4
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 20,
            inventionTypes: [EnhancementCategory.HEALING],
            count: 4
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};