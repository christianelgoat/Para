
import React from 'react';
import EvaluationTable from './components/EvaluationTable';
import type { EvaluationParameter } from './types';

const evaluationData: EvaluationParameter[] = [
  {
    parameter: 'APLICABILIDAD',
    characteristics: 'Propuesta de valor / Adecuación al problema',
    qualitativeMethod: true,
    justification: (
      <>
        Se evaluó cualitativamente si la solución era{' '}
        <strong className="font-semibold text-teal-700">apropiada y relevante</strong> para
        resolver el problema de la gestión de inventarios en MYPEs, basado en la
        percepción de los usuarios.
      </>
    ),
  },
  {
    parameter: 'VERACIDAD',
    characteristics:
      'Grado de acierto con la necesidad del usuario / Medición del Sesgo (Bias)',
    qualitativeMethod: false,
    justification: (
      <>
        Se evaluó cuantitativamente a través del{' '}
        <strong className="font-semibold text-teal-700">Sesgo (Bias)</strong>,
        comparando la experiencia actual del MVP con una ideal. El feedback
        cualitativo ayudó a interpretar este sesgo.
      </>
    ),
  },
  {
    parameter: 'PRECISIÓN',
    characteristics: 'Repetibilidad / Reproducibilidad',
    qualitativeMethod: false,
    justification: (
      <>
        Se midió cuantitativamente. La{' '}
        <strong className="font-semibold text-teal-700">Repetibilidad</strong> se
        observó en la capacidad de un usuario para realizar tareas de forma
        consistente. La{' '}
        <strong className="font-semibold text-teal-700">Reproducibilidad</strong>{' '}
        se validó al ver que un alto y consistente porcentaje de{' '}
        <strong className="font-semibold text-teal-700">diferentes usuarios</strong>{' '}
        (94.4%) lograba el mismo resultado exitoso.
      </>
    ),
  },
  {
    parameter: 'ROBUSTEZ',
    characteristics: 'Rendimiento frente a variaciones en el usuario',
    qualitativeMethod: false,
    justification: (
      <>
        Se evaluó cuantitativamente al comprobar que el sistema mantenía un alto
        rendimiento (94.4% de éxito) a pesar de la principal variable: el{' '}
        <strong className="font-semibold text-teal-700">
          diferente nivel de competencia digital
        </strong>{' '}
        de los participantes en la prueba.
      </>
    ),
  },
  {
    parameter: 'LÍMITES',
    characteristics:
      'Identificación de puntos de fricción y umbrales de usabilidad',
    qualitativeMethod: true,
    justification: (
      <>
        Se evaluó cualitativamente al identificar los "límites" del MVP actual:
        dónde los usuarios dudaban (ej. terminología como "SKU") o dónde la
        interfaz se percibía como "muy básica", definiendo el alcance de la
        mejora necesaria.
      </>
    ),
  },
];


const App: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-teal-50 to-green-100 min-h-screen flex items-start justify-center p-4 sm:p-6 lg:p-12 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-800 text-center mb-8">
          Análisis de Parámetros de Evaluación
        </h1>
        <EvaluationTable data={evaluationData} />
      </div>
    </main>
  );
};

export default App;
