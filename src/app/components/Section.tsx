'use client';
import { PropsWithChildren, useState } from 'react';

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';

import { Calendar, ChevronDown, ChevronUp, Leaf, Sun } from 'lucide-react';

type SectionType = 'today' | 'growing' | 'next';

type SectionProps = PropsWithChildren & {
	type: SectionType;
	openByDefault?: boolean;
	title: string;
};

type IconSectionMap = {
	[key in SectionType]: React.ReactElement;
};

const iconSectionMap: IconSectionMap = {
	today: <Calendar className="text-white" />,
	growing: <Leaf className="text-white" />,
	next: <Sun className="text-white" />,
};

export const Section = ({
	type,
	openByDefault,
	title,
	children,
}: SectionProps) => {
	const [open, setOpen] = useState<boolean>();
	return (
		<Collapsible defaultOpen={openByDefault} open={open} onOpenChange={setOpen}>
			<CollapsibleTrigger className="p-4 bg-green-600 w-full rounded-t-sm">
				<div className="flex justify-between">
					<div className="flex gap-2">
						{iconSectionMap[type]}
						<span className="text-white text-md font-semibold">{title}</span>
					</div>
					{open ? (
						<ChevronUp className="text-white" />
					) : (
						<ChevronDown className="text-white" />
					)}
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent>{children}</CollapsibleContent>
		</Collapsible>
	);
};
