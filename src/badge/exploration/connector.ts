import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {IndependencePort} from "../../map/independence-port";

export const Connector: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "connector",
    names: [{value: "Connector"}],
    alignment: ALIGNMENT_HERO,
    mapKey: IndependencePort.key,
    location: [-1088.0, 96.0, -7119.0],
    badgeText: [{
        value: "The Bell-Wave is the twin of the nearly destroyed Valor Bridge." +
            " Cynics say that the statue of the heroine at the end was built to inspire the bridge to be named after her, but the trend never took off."
    }],
    notes: "The Connector Badge is in the Bell Point neighborhood of Independence Port.\n\nIt is on the bridge 285 yards west of the Architect Entertainment building.",
    links: [
        {title: "Connector Badge", href: "https://paragonwiki.com/wiki/Connector_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "7"
};