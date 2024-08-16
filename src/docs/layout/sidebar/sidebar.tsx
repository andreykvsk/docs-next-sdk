import React from "react";
import SidebarItem from "@/app/docs/layout/sidebar/sidebar-item";

export type SubsectionType = {
	title: string;
};

export type SidebarItemType = {
	title: string;
	subsections: SubsectionType[];
};

type Props = {
	items: SidebarItemType[];
};

export default function Sidebar({ items }: Props) {
	const activeBgColor = "bg-purple-200/50";
	const activeFontColor = "text-purple-600";

	return (
		<aside className="flex h-fit w-[240px] flex-col py-4">
			{items.map((item, index) => (
				<SidebarItem
					key={index}
					sectionTitle={item.title}
					subsections={item.subsections}
					activeBgColor={activeBgColor}
					activeFontColor={activeFontColor}
					currentPage='Installation'
				/>
			))}
		</aside>
	);
}
