import React from 'react';
import EvaluationTable from './components/EvaluationTable';
import type { EvaluationParameter } from './types';

const evaluationData: EvaluationParameter[] = [
  {
    parameter: 'VERACIDAD',
    justification: (
      <>
        Se midió cuantitativamente a través del{' '}
        <strong className="font-semibold text-teal-700">Sesgo (Bias)</strong>.
        La alta eficacia en reducir tiempo (56.8%) y estrés (3.97/5) demostró
        que la solución apunta al problema correcto (
        <strong className="font-semibold text-teal-700">
          alta veracidad del concepto
        </strong>
        ).
      </>
    ),
  },
  {
    parameter: 'PRECISIÓN',
    justification: (
      <>
        Se midió cuantitativamente pero con resultados mixtos. La{' '}
        <strong className="font-semibold text-teal-700">Repetibilidad</strong>{' '}
        fue baja debido a errores técnicos (pérdida de datos, lentitud). La{' '}
        <strong className="font-semibold text-teal-700">Reproducibilidad</strong>{' '}
        también fue baja, ya que diferentes usuarios encontraron diferentes
        problemas, impidiendo un resultado exitoso consistente.{' '}
        <strong className="font-semibold text-teal-700">
          La falta de precisión técnica fue la causa del no cumplimiento de la
          tasa de adopción.
        </strong>
      </>
    ),
  },
  {
    parameter: 'ROBUSTEZ',
    justification: (
      <>
        La robustez del{' '}
        <strong className="font-semibold text-teal-700">concepto</strong> frente
        a usuarios con diferentes niveles de digitalización es alta (todos
        entendieron el propósito). Sin embargo, la robustez{' '}
        <strong className="font-semibold text-teal-700">técnica</strong> del
        prototipo es baja, ya que fue susceptible a fallos bajo condiciones
        normales de uso.
      </>
    ),
  },
  {
    parameter: 'LÍMITES',
    justification: (
      <>
        Se identificaron cualitativamente los{' '}
        <strong className="font-semibold text-teal-700">límites técnicos</strong>{' '}
        del MVP actual: incapacidad para garantizar la integridad de los datos y
        un rendimiento aceptable. Estos hallazgos definen las prioridades para
        la siguiente iteración.
      </>
    ),
  },
];


const App: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-teal-50 to-green-100 min-h-screen flex items-start justify-center p-4 sm:p-6 lg:p-12 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-800 text-center mb-8">
          Análisis de Parámetros de Evaluación (Nueva Versión)
        </h1>
        <EvaluationTable data={evaluationData} />
      </div>
    </main>
  );
};

export default App;
