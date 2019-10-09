import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Discerning: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "discerning",
    names: [
        {value: "Discerning"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 60",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-60.png"}]
};
