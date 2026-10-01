export type NivelAfinidad = "Experto" | "Avanzado" | "Intermedio" | "Base";

export interface AreaAfinidad {
  area: string;
  nivel: NivelAfinidad;
  puntuacion: number; // 0 a 10
}

export interface RadarMock {
  perfil: {
    nombre: string;
    cargo: string;
    aniosExperiencia: number;
    tecnologias: string[];
    fotoUrl: string;
  };
  kpis: {
    afinidadGlobal: number;
    variacionVsAnterior: number;
    areasClave: number;
    palabrasClave: number;
    palabrasAltaRelevancia: number;
    perfilObjetivoPct: number;
    umbralMinimoPct: number;
  };
  areas: AreaAfinidad[];
}