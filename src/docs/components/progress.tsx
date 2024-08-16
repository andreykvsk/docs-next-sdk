import { cn } from "@/lib/utils";

type Props = {
	topics: string[];
	currentTopic: string;
};

export default function Progress({ topics, currentTopic }: Props) {
	const coreClassName = "flex flex-col text-sm cursor-pointer";
	const className = (topic: string) =>
		cn(
			coreClassName,
			topic === currentTopic
				? "text-purple-600"
				: "text-gray-400 hover:text-gray-500",
		);

	return (
		<div className="flex flex-col gap-2">
			{topics.map((topic, index) => (
				<div className={className(topic)}>

					{topic}
				</div>
			))}
		</div>
	);
}
