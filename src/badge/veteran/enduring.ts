import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Enduring: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "enduring",
    names: [
        {value: "Enduring"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 66",
    imageKeys: [{value: "core.veteran.veteran-66"}]
};
