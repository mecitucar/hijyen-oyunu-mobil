import React from 'react';

type TreeProps = {
  scale?: number; // overall size multiplier
  flip?: boolean; // mirror horizontally
  className?: string;
  style?: React.CSSProperties;
  isWrong?: boolean;
};

export default function Tree({ scale = 1, flip = false, className = '', style, isWrong = false }: TreeProps) {
  const transform = `scale(${flip ? -1 : 1},1) scale(${scale})`;
  const canopyFill = isWrong ? '#48621a' : '#77a33a';
  const canopyShadow = isWrong ? '#365114' : '#5b7d2a';
  const trunkFill = isWrong ? '#4a2b22' : '#6b3b2b';

  return (
    <div className={className} style={{ display: 'inline-block', lineHeight: 0, ...style }}>
      <svg viewBox="0 0 120 150" width={120 * scale} height={150 * scale} style={{ transform, transformOrigin: 'center' }} xmlns="http://www.w3.org/2000/svg">
        {/* Canopy */}
        <g>
          <ellipse cx="60" cy="54" rx="48" ry="46" fill={canopyFill} style={{ transition: 'fill 280ms ease' }} />
          <path d="M12 66c8-6 18-10 30-10s22 4 30 10c-8 6-18 10-30 10S20 72 12 66z" fill={canopyShadow} style={{ transition: 'fill 280ms ease' }} />
        </g>

        {/* Trunk */}
        <g>
          <rect x="54" y="70" width="12" height="60" rx="3" fill={trunkFill} style={{ transition: 'fill 280ms ease' }} />
          <path d="M60 74c6 6 12 18 12 18H48s6-12 12-18z" fill="#5a2f22" opacity="0.12" />
        </g>
      </svg>
    </div>
  );
}
