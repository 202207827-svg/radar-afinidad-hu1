import type { RadarMock } from "./types";

export default function KpiCards({ kpis }: { kpis: RadarMock["kpis"] }) {
  const cards = [
    { valor: kpis.afinidadGlobal.toFixed(2), sufijo: "/ 10", titulo: "Afinidad Global", detalle: `+${kpis.variacionVsAnterior} vs. anterior`, valorRojo: false, detalleRojo: true },
    { valor: String(kpis.areasClave), titulo: "Áreas Clave", detalle: "Áreas Analizadas · Cobertura completa", valorRojo: true, detalleRojo: true },
    { valor: String(kpis.palabrasClave), titulo: "Palabras Clave", detalle: `Tokens Técnicos · ${kpis.palabrasAltaRelevancia} alta relevancia`, valorRojo: true, detalleRojo: true },
    { valor: `${kpis.perfilObjetivoPct}%`, titulo: "Perfil Objetivo", detalle: `Compatibilidad · Umbral mín. ${kpis.umbralMinimoPct}%`, valorRojo: false, detalleRojo: false },
  ];

  return (
    <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {cards.map((c) => (
        <div key={c.titulo} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <p className={`text-2xl font-bold ${c.valorRojo ? "text-red-600" : "text-slate-900"}`}>
            {c.valor}
            {c.sufijo && <span className="ml-1 text-xs font-normal text-slate-400">{c.sufijo}</span>}
          </p>
          <p className="text-xs font-semibold text-slate-800">{c.titulo}</p>
          <p className={`text-[10px] ${c.detalleRojo ? "text-red-500" : "text-slate-400"}`}>{c.detalle}</p>
        </div>
      ))}
    </section>
  );
}