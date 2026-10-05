import { useState } from "react";
import type { RadarMock } from "./types";

interface Props {
  perfil: RadarMock["perfil"];
}

export default function ProfileHeader({ perfil }: Props) {
  const [fotoError, setFotoError] = useState(false);
  const iniciales = perfil.nombre.split(" ").map((p) => p[0]).slice(0, 2).join("");

  return (
    <section className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        {fotoError ? (
          <div className="flex h-16 w-16 items-center justify-center rounded bg-slate-200 text-lg font-semibold text-slate-600">
            {iniciales}
          </div>
        ) : (
          <img
            src={perfil.fotoUrl}
            alt={perfil.nombre}
            onError={() => setFotoError(true)}
            className="h-16 w-16 rounded object-cover"
          />
        )}
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-widest text-red-600">
            Career Profile AI Analysis
          </p>
          <h1 className="text-xl font-bold text-slate-900">{perfil.nombre}</h1>
          <p className="text-xs text-slate-500">
            {perfil.cargo} · {perfil.aniosExperiencia} años de experiencia
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {perfil.tecnologias.map((t) => (
              <span key={t} className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-600">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}