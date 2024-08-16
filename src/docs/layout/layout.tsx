import React from "react";
import Sidebar from "@/app/docs/layout/sidebar/sidebar";
import Navbar from "@/app/docs/layout/navbar/navbar";

type Props = {
	// sections: any;
	children: React.ReactNode;
};

// Предполагается что будут приходить отдельно секции и отдельно контент
const sampleDocTopics = [
	{
		title: "Getting Started",
		subsections: [
			{ title: "Overview" },
			{ title: "Installation" },
			{ title: "Quick Start Guide" },
		],
	},
	{
		title: "User Interface Basics",
		subsections: [
			{ title: "Dashboard Overview" },
			{ title: "Navigation Menu" },
			{ title: "Customizing UI Elements" },
		],
	},
	{
		title: "Creating Your First Page",
		subsections: [
			{ title: "Page Structure" },
			{ title: "Adding Content" },
			{ title: "Previewing and Publishing" },
		],
	},
	{
		title: "Adding and Styling Elements",
		subsections: [
			{ title: "Element Types" },
			{ title: "Styling Basics" },
			{ title: "Advanced CSS Techniques" },
		],
	},
	{
		title: "Working with Templates",
		subsections: [
			{ title: "Choosing a Template" },
			{ title: "Customizing Templates" },
			{ title: "Creating Custom Templates" },
		],
	},
	{
		title: "Mobile Responsiveness",
		subsections: [
			{ title: "Responsive Design Principles" },
			{ title: "Testing on Different Devices" },
			{ title: "Mobile-Specific Features" },
		],
	},
	{
		title: "SEO Optimization Tools",
		subsections: [
			{ title: "On-Page SEO" },
			{ title: "Meta Tags and Descriptions" },
			{ title: "SEO Analysis Tools" },
		],
	},
	{
		title: "Custom Domain Setup",
		subsections: [
			{ title: "Purchasing a Domain" },
			{ title: "DNS Configuration" },
			{ title: "SSL Certificate Setup" },
		],
	},
	{
		title: "E-commerce Integration",
		subsections: [
			{ title: "Setting Up Your Store" },
			{ title: "Product Management" },
			{ title: "Payment Gateway Integration" },
		],
	},
	{
		title: "Blog Management",
		subsections: [
			{ title: "Creating Blog Posts" },
			{ title: "Categories and Tags" },
			{ title: "Comments and Moderation" },
		],
	},
	{
		title: "User Accounts and Permissions",
		subsections: [
			{ title: "User Registration" },
			{ title: "Role-Based Access Control" },
			{ title: "Managing User Permissions" },
		],
	},
	{
		title: "Analytics and Reporting",
		subsections: [
			{ title: "Setting Up Analytics" },
			{ title: "Interpreting Data" },
			{ title: "Custom Reports" },
		],
	},
	{
		title: "Performance Optimization",
		subsections: [
			{ title: "Page Speed Analysis" },
			{ title: "Caching Strategies" },
			{ title: "Asset Optimization" },
		],
	},
	{
		title: "API Documentation",
		subsections: [
			{ title: "API Overview" },
			{ title: "Authentication" },
			{ title: "Endpoint References" },
		],
	},
	{
		title: "User Interface Basics",
		subsections: [
			{ title: "Dashboard Overview" },
			{ title: "Navigation Menu" },
			{ title: "Customizing UI Elements" },
		],
	},
	{
		title: "Creating Your First Page",
		subsections: [
			{ title: "Page Structure" },
			{ title: "Adding Content" },
			{ title: "Previewing and Publishing" },
		],
	},
	{
		title: "Adding and Styling Elements",
		subsections: [
			{ title: "Element Types" },
			{ title: "Styling Basics" },
			{ title: "Advanced CSS Techniques" },
		],
	},
	{
		title: "Working with Templates",
		subsections: [
			{ title: "Choosing a Template" },
			{ title: "Customizing Templates" },
			{ title: "Creating Custom Templates" },
		],
	},

];


export default function Layout({ children }: Props) {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<div className="flex flex-1 max-w-[1400px] w-full mx-auto overflow-hidden">
				<div className="w-64 h-full flex-shrink-0 overflow-y-auto border-r border-gray-200">
					<Sidebar items={sampleDocTopics} />
				</div>
				<main className="flex-1 overflow-y-auto p-4">
					{children}
				</main>
			</div>
		</div>
	);
}
