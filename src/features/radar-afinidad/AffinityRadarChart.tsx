import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import type { AreaAfinidad } from "./types";

interface Props {
  areas: AreaAfinidad[];
  promedio: number;
}

export default function AffinityRadarChart({ areas, promedio }: Props) {
  return (
    <section className="flex flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">Vectorial Affinity Breakdown</h2>
          <p className="text-[10px] text-slate-400">{areas.length} áreas · NLP tokenization</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-red-600">{promedio.toFixed(2)}</p>
          <p className="text-[9px] uppercase tracking-widest text-slate-400">Promedio</p>
        </div>
      </div>

      <div className="h-[440px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={areas} outerRadius="68%">
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="area" tick={{ fill: "#6b7280", fontSize: 13 }} />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 10]}
              tickCount={6}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 9 }}
            />
            <Radar
              name="Profile Affinity Score"
              dataKey="puntuacion"
              stroke="#dc2626"
              strokeWidth={1.5}
              fill="#dc2626"
              fillOpacity={0.15}
              dot={{ r: 4, fill: "#dc2626", fillOpacity: 1 }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-2 text-[10px] text-slate-500">
        <span className="h-2.5 w-5 rounded-sm bg-red-200" />
        Profile Affinity Score
      </div>
    </section>
  );
}