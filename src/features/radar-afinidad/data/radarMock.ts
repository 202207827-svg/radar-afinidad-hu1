import type { RadarMock } from "../types";

export const radarMock: RadarMock = {
  perfil: {
    nombre: "Carlos Mendoza Ríos",
    cargo: "Senior Software Engineer",
    aniosExperiencia: 8,
    tecnologias: ["React", "Node.js", "AWS", "Docker", "Python", "PostgreSQL", "TypeScript", "Kubernetes"],
    fotoUrl: "/carlos.jpg",
  },
  kpis: {
    afinidadGlobal: 6.25,
    variacionVsAnterior: 0.8,
    areasClave: 6,
    palabrasClave: 142,
    palabrasAltaRelevancia: 37,
    perfilObjetivoPct: 73,
    umbralMinimoPct: 60,
  },
  areas: [
    { area: "Desarrollo", nivel: "Experto", puntuacion: 8.5 },
    { area: "Cloud/DevOps", nivel: "Avanzado", puntuacion: 7 },
    { area: "Data/AI", nivel: "Avanzado", puntuacion: 6.5 },
    { area: "QA", nivel: "Intermedio", puntuacion: 5 },
    { area: "Ciberseguridad", nivel: "Base", puntuacion: 4.5 },
    { area: "Gobernanza TI", nivel: "Intermedio", puntuacion: 6 },
  ],
};