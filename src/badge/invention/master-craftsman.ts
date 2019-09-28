import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterCraftsman: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "master-craftsman",
    names: [{value: "Master Craftsman"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "A Master Craftsman they call you, as you have created 1,000 inventions."}],
    acquisition: "Craft 1000 items in the Invention System or Supergroup Base system.",
    notes: "This includes anything craftable on Invention Worktables, Base Worktables, and Empowerment Stations (including Empowerment Buffs), as well as special crafting such as the" +
        " Vanguard Crafting Table and Candy Keeper.",
    links: [
        {title: "Master Craftsman Badge", href: "https://paragonwiki.com/wiki/Master_Craftsman_Badge"}
    ],
    imageKeys: [{value: "core.invention.master-craftsman"}]
};
