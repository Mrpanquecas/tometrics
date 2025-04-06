import { Section } from '@/app/components/Section';
import { SectionItem } from '@/app/components/SectionItem';

export const TodaySection = () => {
	return (
		<Section openByDefault type="today" title="Today's Tasks">
			<div className="shadow p-2">
				<SectionItem />
			</div>
		</Section>
	);
};
