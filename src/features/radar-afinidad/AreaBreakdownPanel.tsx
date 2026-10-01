import type { AreaAfinidad, NivelAfinidad } from "./types";

const color: Record<NivelAfinidad, string> = {
  Experto: "bg-red-600",
  Avanzado: "bg-amber-500",
  Intermedio: "bg-slate-400",
  Base: "bg-slate-300",
};

export default function AreaBreakdownPanel({ areas, media }: { areas: AreaAfinidad[]; media: number }) {
  return (
    <aside className="flex flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-900">Desglose por Área</h2>
      <p className="mb-4 text-[10px] text-slate-400">Puntuaciones NLP tokenizadas</p>

      <ul className="space-y-4">
        {areas.map((a) => (
          <li key={a.area}>
            <div className="flex items-center gap-2 text-xs">
              <span className={`h-1.5 w-1.5 rounded-full ${color[a.nivel]}`} />
              <span className="text-slate-800">{a.area}</span>
              <span className="ml-auto text-[9px] text-slate-400">{a.nivel}</span>
              <span className="w-6 text-right font-bold text-slate-900">{a.puntuacion}</span>
            </div>
            <div className="mt-1 h-1.5 rounded bg-slate-100">
              <div className={`h-full rounded ${color[a.nivel]}`} style={{ width: `${a.puntuacion * 10}%` }} />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-baseline justify-between border-t border-slate-100 pt-4">
        <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-400">Media global</span>
        <span className="text-xl font-bold text-red-600">
          {media.toFixed(2)} <span className="text-[10px] font-normal text-slate-400">/ 10</span>
        </span>
      </div>
    </aside>
  );
}