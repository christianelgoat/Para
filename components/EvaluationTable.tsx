import React from 'react';
import type { EvaluationParameter } from '../types';

interface EvaluationTableProps {
  data: EvaluationParameter[];
}

const EvaluationTable: React.FC<EvaluationTableProps> = ({ data }) => {
  const headers = [
    'Parámetro a Evaluar',
    'Justificación de la Clasificación (Nueva Versión)',
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left">
          <thead className="bg-teal-600">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={header}
                  scope="col"
                  className={`px-6 py-4 font-bold text-sm text-white uppercase tracking-wider ${index === 0 ? 'w-1/4' : 'w-3/4'}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item, index) => (
              <tr key={index} className="even:bg-teal-50/50 hover:bg-teal-100 transition-colors duration-200 border-t border-gray-200">
                <td className="px-6 py-4 font-bold text-teal-900 text-sm align-top">
                  {item.parameter}
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
