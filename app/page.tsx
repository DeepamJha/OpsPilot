import { AppShell } from '@/components/layout/AppShell';
import { HeroKpis } from '@/components/dashboard/HeroKpis';
import { AiInvestigationPanel } from '@/components/ai/AiInvestigationPanel';
import { RequestTimelinePanel } from '@/components/charts/RequestTimelinePanel';
import { AiChatDock } from '@/components/charts/AiChatDock';
import { LiveLogs } from '@/components/charts/LiveLogs';
import { ServiceActivityHeatmap } from '@/components/charts/ServiceActivityHeatmap';
import { TraceWaterfall } from '@/components/charts/TraceWaterfall';
import { ServiceHealthPanel } from '@/components/dashboard/ServiceHealthPanel';

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <HeroKpis />
        <AiInvestigationPanel />
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.9fr]">
          <RequestTimelinePanel />
          <ServiceHealthPanel />
        </div>
        <ServiceActivityHeatmap />
        <TraceWaterfall />
        <LiveLogs />
        <AiChatDock />
      </div>
    </AppShell>
  );
}
