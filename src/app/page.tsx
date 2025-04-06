import Image from 'next/image';
import { ZoneSelect } from '@/app/components/Select';
import { Today } from '@/app/components/Today';
import { Section } from '@/app/components/Section';
import { TodaySection } from '@/app/components/TodaySection';

export default function Home() {
	return (
		<div className="">
			<main className="p-4 max-w-4xl mx-auto">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-green-600 text-4xl font-bold">
						Tometrics planner
					</h1>
					<div className="flex items-center px-3 py-1 gap-4">
						<Today />
						<ZoneSelect />
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<TodaySection />
					<Section type="growing" title="Currently Growing" />
					<Section type="next" title="Recommended next steps" />
				</div>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
