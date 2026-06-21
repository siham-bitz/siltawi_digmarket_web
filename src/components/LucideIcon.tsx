/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as LucideIcons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className = '', size = 24 }) => {
  // Safe lookup for Lucide icon components.
  // We fall back to a generic HelpCircle if the mapped icon doesn't exist.
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
  return <IconComponent className={className} size={size} />;
};
