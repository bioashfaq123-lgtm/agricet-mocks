// Telugu translation layer — kept separate from the English question banks so the
// English data stays untouched. Translations are keyed by question id.
export interface QTrans {
  q: string;        // translated question stem
  o: string[];      // translated options (same order as English)
  e?: string;       // translated explanation
}

import { da102Te } from "./te/da-102";

export const TE: Record<string, QTrans> = {
  ...da102Te,
  // More subjects are merged here as they are translated.
};

export function getTe(id: string): QTrans | undefined {
  return TE[id];
}
