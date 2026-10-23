'use client';
import { useState } from 'react';

/** Shows a designed placeholder until you add a real image at the given public path. */
export function ImageSlot({ src, label, className = '' }: { src: string; label: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return <div className={`image-slot ${className}`}>
    {!failed && <img src={src} alt={label} onError={() => setFailed(true)} />}
    <div className="image-placeholder" aria-hidden={!failed} style={{ display: failed ? 'flex' : 'none' }}>
      <span className="placeholder-icon" aria-hidden="true">▧</span>
      <span>{label}</span><small>Add image: public{src}</small>
    </div>
  </div>;
}
