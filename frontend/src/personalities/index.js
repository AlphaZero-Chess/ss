// ═══════════════════════════════════════════════════════════════════════
// CHESS PERSONALITIES - Index File
// Exports all personality configurations and opening books
// ═══════════════════════════════════════════════════════════════════════

import { ELEGANT_CONFIG, ELEGANT_OPENINGS } from './elegant';
import { NON_ELEGANT_CONFIG, NON_ELEGANT_OPENINGS } from './nonelegant';
import { MINI_A0_CONFIG, MINI_A0_OPENINGS } from './minia0';

// Re-export individual configs and openings
export { ELEGANT_CONFIG, ELEGANT_OPENINGS } from './elegant';
export { NON_ELEGANT_CONFIG, NON_ELEGANT_OPENINGS } from './nonelegant';
export { MINI_A0_CONFIG, MINI_A0_OPENINGS } from './minia0';

// Helper function to get personality by ID
export const getPersonality = (enemyId) => {
  switch (enemyId) {
    case 'elegant':
      return {
        config: ELEGANT_CONFIG,
        openings: ELEGANT_OPENINGS,
        style: 'positional'
      };
    case 'nonelegant':
      return {
        config: NON_ELEGANT_CONFIG,
        openings: NON_ELEGANT_OPENINGS,
        style: 'aggressive'
      };
    case 'minia0':
      return {
        config: MINI_A0_CONFIG,
        openings: MINI_A0_OPENINGS,
        style: 'strategic'
      };
    default:
      return {
        config: ELEGANT_CONFIG,
        openings: ELEGANT_OPENINGS,
        style: 'balanced'
      };
  }
};

export default {
  elegant: { config: ELEGANT_CONFIG, openings: ELEGANT_OPENINGS },
  nonelegant: { config: NON_ELEGANT_CONFIG, openings: NON_ELEGANT_OPENINGS },
  minia0: { config: MINI_A0_CONFIG, openings: MINI_A0_OPENINGS },
  getPersonality
};
