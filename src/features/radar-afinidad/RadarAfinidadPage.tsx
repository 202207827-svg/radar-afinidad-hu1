import { radarMock } from "./data/radarMock";
import Sidebar from "./Sidebar";
import ProfileHeader from "./ProfileHeader";
import KpiCards from "./KpiCards";
import AffinityRadarChart from "./AffinityRadarChart";
import AreaBreakdownPanel from "./AreaBreakdownPanel";

export default function RadarAfinidadPage() {
  const { perfil, kpis, areas } = radarMock;
  const media = areas.reduce((s, a) => s + a.puntuacion, 0) / areas.length;

  return (
    <div className="flex h-screen bg-[#f3f5f9]">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between bg-[#0f1b2d] px-6 py-2 text-[10px] tracking-widest text-slate-400">
          <span>UMSSY · NLP VECTORIAL ENGINE V1.0</span>
          <span>GESTIÓN 3.0</span>
        </div>

        <main className="flex-1 space-y-3 overflow-y-auto p-5">
          <ProfileHeader perfil={perfil} afinidadGlobal={kpis.afinidadGlobal} variacion={kpis.variacionVsAnterior} />
          <KpiCards kpis={kpis} />
          <div className="grid gap-3 lg:grid-cols-[1fr_280px]">
            <AffinityRadarChart areas={areas} promedio={media} />
            <AreaBreakdownPanel areas={areas} media={media} />
          </div>
        </main>
      </div>
    </div>
  );
}