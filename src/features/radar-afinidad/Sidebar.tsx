const principal = ["Perfil", "Empleos"];
const mentores = ["Buscar mentores", "Agendar", "Mis citas", "Solicitudes", "Mi disponibilidad"];

function Item({ label, activo = false }: { label: string; activo?: boolean }) {
  return (
    <li
      className={`cursor-pointer border-l-2 px-4 py-2 text-xs ${
        activo ? "border-red-600 bg-white/5 text-white" : "border-transparent text-slate-400 hover:text-white"
      }`}
    >
      {label}
    </li>
  );
}

export default function Sidebar() {
  return (
    <aside className="flex w-52 shrink-0 flex-col bg-[#0f1b2d]">
      <div className="flex items-center gap-2 border-b border-white/10 p-4">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-red-700 text-sm font-bold text-white">U</div>
        <div>
          <p className="text-sm font-bold leading-none text-white">UMSSY</p>
          <p className="text-[9px] text-slate-500">Egresados</p>
        </div>
      </div>

      <ul className="mt-3">
        {principal.map((p) => <Item key={p} label={p} activo={p === "Perfil"} />)}
      </ul>

      <p className="mb-1 mt-5 px-4 text-[9px] font-semibold tracking-widest text-slate-600">MENTORES</p>
      <ul>{mentores.map((m) => <Item key={m} label={m} />)}</ul>

      <div className="mt-auto flex items-center gap-2 border-t border-white/10 p-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-[10px] text-white">AR</div>
        <div>
          <p className="text-xs text-white">Ana Rojas</p>
          <p className="text-[9px] text-slate-500">Egresada</p>
        </div>
      </div>
    </aside>
  );
}