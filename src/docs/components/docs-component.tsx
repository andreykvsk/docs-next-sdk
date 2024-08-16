import Progress from "@/app/docs/components/progress";
import { Button } from "@/components/ui/button";

type Props = {
	title: string;
	topics: string[];
	content: string;
};

export default function DocsComponent({ title, topics, content }: Props) {
	return (
		<div className="flex justify-between">
			<div>
				<h1>{title}</h1>
				<p>{content}</p>
			</div>
			<div>
				<Progress topics={topics} currentTopic={"Updating"} />
			</div>
		</div>
	);
}
