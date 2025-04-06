'use client';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

export const ZoneSelect = () => {
	const [zone, setZone] = useState<string>();
	return (
		<Select name="zone" onValueChange={setZone}>
			<SelectTrigger>
				<SelectValue placeholder="Zone: 10b">
					<span className="text-sm text-muted-foreground">Zone:</span> {zone}
				</SelectValue>
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="10b">10b</SelectItem>
					<SelectItem value="10a">10a</SelectItem>
					<SelectItem value="9a">9a</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};
