"use client";

import { cn } from "@/lib/utils";
import { SubsectionType } from "@/app/docs/layout/sidebar/sidebar";
import React, { useCallback, useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";

// Define the props for the SidebarItem component
type Props = {
	sectionTitle: string;
	subsections: SubsectionType[];
	activeBgColor: string;
	activeFontColor: string;
	currentPage: string;
};

export default function SidebarItem({
	sectionTitle,
	subsections,
	activeBgColor,
	activeFontColor,
	currentPage,
}: Props) {
	// Check if a page is active
	const isActivePage = useCallback(
		(pageSlug: string) => currentPage === pageSlug,
		[currentPage],
	);

	// Check if any subsection is active
	const isAnySubsectionActive = useMemo(
		() => subsections.some((subsection) => isActivePage(subsection.title)),
		[subsections, isActivePage],
	);

	// State to manage section open/close
	const [isSectionOpen, setIsSectionOpen] = useState(isAnySubsectionActive);

	// Toggle section open/close
	const toggleSection = useCallback(() => {
		setIsSectionOpen((prev) => !prev);
	}, []);

	// Generate className based on active state
	const getClassName = useCallback(
		(pageSlug: string) => {
			const coreClassName =
				"flex items-center justify-between text-sm py-2 px-3 select-none rounded-md cursor-pointer font-medium hover:bg-gray-50";
			return cn(
				coreClassName,
				isActivePage(pageSlug)
					? [activeFontColor]
					: ["text-gray-400 hover:text-gray-500"],
			);
		},
		[isActivePage, activeFontColor],
	);

	// Render subsections
	const renderSubsections = () => (
		<ul className="relative ml-4 mt-2">
			{subsections.map((subsection) => (
				<li
					key={subsection.title}
					className={cn(
						getClassName(subsection.title),
						"relative z-10 pl-4",
						isActivePage(subsection.title) &&
							"before:absolute before:left-0 before:top-1/2 before:z-20 before:h-full before:max-h-8 before:w-0.5 before:-translate-y-1/2 before:bg-purple-600",
					)}
				>
					{/* Vertical line for subsections */}
					<div className="absolute bottom-0 left-0 top-0 z-0 w-px bg-gray-200" />
					<span className="relative z-30 flex-grow">
						{subsection.title}
					</span>
				</li>
			))}
		</ul>
	);

	// Render the main component
	return (
		<ul>
			{subsections.length === 1 ? (
				// Render single section
				<li className={getClassName(sectionTitle)}>
					<span className="flex-grow">{sectionTitle}</span>
				</li>
			) : (
				// Render section with subsections
				<>
					<li
						className={getClassName(sectionTitle)}
						onClick={toggleSection}
					>
						<span
							className={cn(
								"flex-grow",
								isAnySubsectionActive && "text-gray-500",
							)}
						>
							{sectionTitle}
						</span>
						{/* Chevron icon for expand/collapse */}
						<ChevronRight
							size={16}
							className={cn(
								"flex-shrink-0 transition-transform duration-200 ease-in-out",
								isSectionOpen ? "rotate-90" : "rotate-0",
							)}
						/>
					</li>
					{/* Render subsections if section is open */}
					{isSectionOpen && renderSubsections()}
				</>
			)}
		</ul>
	);
}
