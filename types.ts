
import type React from 'react';

export interface EvaluationParameter {
  parameter: string;
  characteristics: string;
  qualitativeMethod: boolean;
  justification: React.ReactNode;
}
