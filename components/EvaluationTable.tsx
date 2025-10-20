
import React from 'react';
import type { EvaluationParameter } from '../types';

interface EvaluationTableProps {
  data: EvaluationParameter[];
}

const MethodIcon: React.FC<{ isYes: boolean }> = ({ isYes }) => {
  if (isYes) {
    return (
      <div className="flex justify-center items-center" title="Sí">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center" title="No">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
    </div>
  );
};

const EvaluationTable: React.FC<EvaluationTableProps> = ({ data }) => {
  const headers = [
    'Parámetro a Evaluar',
    'Característica(s)',
    'Método Cualitativo',
    'Justificación de la Clasificación',
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left">
          <thead className="bg-teal-600">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-4 font-bold text-sm text-white uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item, index) => (
              <tr key={index} className="even:bg-teal-50/50 hover:bg-teal-100 transition-colors duration-200">
                <td className="px-6 py-4 font-bold text-teal-900 text-sm align-top">
                  {item.parameter}
                </td>
                <td className="px-6 py-4 text-gray-600 text-sm align-top max-w-xs">
                  {item.characteristics}
                </td>
                <td className="px-6 py-4 whitespace-nowrap align-top">
                  <MethodIcon isYes={item.qualitativeMethod} />
                </td>
                <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed align-top">
                  {item.justification}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EvaluationTable;
