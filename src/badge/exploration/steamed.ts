import {ALIGNMENT_VILLAIN, BadgeType, CohContentDbImageLibrary, IBadgeData} from "coh-content-db";
import {CapAuDiable} from "../../map/cap-au-diable";

export const Steamed: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "steamed",
    canonicalName: "Steamed",
    alignment: ALIGNMENT_VILLAIN,
    mapKey: CapAuDiable.key,
    location: [-2426.0, 224.0, -472.0],
    badgeText: "Volcanic activity around Mount Diable causes a lot of steamy venting. Watch out or it's lobster time.",
    notes: "The badge marker is 88 feet southeast of the Mount Diable marker. It is located just east of a couple of towers holding up large pipes.",
    links: [
        {title: "Steamed Badge", href: "https://paragonwiki.com/wiki/Steamed_Badge"}
    ],
    images: [CohContentDbImageLibrary.badge.exploration.villain],
    vidiotMapKey: "4"
};
