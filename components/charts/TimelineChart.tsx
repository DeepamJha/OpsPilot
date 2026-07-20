"use client";

import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { time: '00', latency: 220, p95: 310 },
  { time: '03', latency: 240, p95: 340 },
  { time: '06', latency: 280, p95: 390 },
  { time: '09', latency: 310, p95: 420 },
  { time: '12', latency: 260, p95: 360 },
  { time: '15', latency: 210, p95: 320 },
  { time: '18', latency: 230, p95: 330 },
  { time: '21', latency: 240, p95: 350 },
];

const markers = [
  { label: 'Deploy', x: '09' },
  { label: 'Scale', x: '15' },
];

export function TimelineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="latencyFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.02} />
          </linearGradient>
          <linearGradient id="p95Fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#34d399" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="var(--chart-grid)" vertical={false} />
        <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-faint)', fontSize: 12 }} />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-faint)', fontSize: 12 }} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'var(--tooltip-background)',
            border: '1px solid var(--tooltip-border)',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-panel)',
            color: 'var(--text-primary)',
          }}
          itemStyle={{ color: 'var(--text-secondary)' }}
          labelStyle={{ color: 'var(--text-primary)' }}
          cursor={{ stroke: 'var(--chart-reference)' }}
        />
        {markers.map((marker) => (
          <ReferenceLine key={marker.label} x={marker.x} stroke="var(--chart-reference)" strokeDasharray="4 4" />
        ))}
        <Area type="monotone" dataKey="p95" stroke="#34d399" strokeWidth={2} fillOpacity={1} fill="url(#p95Fill)" />
        <Area type="monotone" dataKey="latency" stroke="#8b5cf6" strokeWidth={2.4} fillOpacity={1} fill="url(#latencyFill)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
