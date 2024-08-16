"use client";

import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="flex h-[60px] border-b border-gray-200">
			<div className="flex mx-auto w-[1400px]">
				<Image
					src="nexa-logo-text.svg"
					alt="Nexa"
					width={100}
					height={20}
					className="pl-3"
				/>
			</div>
		</nav>
	);
}
