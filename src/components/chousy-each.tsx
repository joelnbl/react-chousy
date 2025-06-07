import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const STYLE_CONFIG = {
  BASE: 'list-none p-0 m-0',
  ITEM: 'mb-2 last:mb-0',
};

interface ChousyEachProps<T> {
  of: T[];
  children: (
    item: T,
    idx: number,
    helpers?: {
      selectedIdx: number | null;
      setSelectedIdx: React.Dispatch<React.SetStateAction<number | null>>;
      isActive?: boolean;
      setActiveIdx?: React.Dispatch<React.SetStateAction<number | null>>;
    }
  ) => React.ReactNode;
  className?: string;
  onChange?: (list: T[]) => void;
  trackSelection?: boolean;
  navHighlight?: boolean;
  getPath?: (item: T, idx: number) => string;
  currentPath?: string;
}

/**
 * ChousyEach - Rails-inspired map/each for React lists.
 * Supports optional state, effect logic, and navbar highlighting via props.
 */
export function ChousyEach<T>({
  of,
  children,
  className,
  onChange,
  trackSelection,
  navHighlight,
  getPath,
  currentPath,
}: ChousyEachProps<T>) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    if (onChange) onChange(of);
  }, [of, onChange]);

  useEffect(() => {
    if (navHighlight && getPath && currentPath) {
      const idx = of.findIndex((item, i) => getPath(item, i) === currentPath);
      setActiveIdx(idx >= 0 ? idx : null);
    }
  }, [navHighlight, getPath, currentPath, of]);

  if (!Array.isArray(of) || of.length === 0) return null;

  return (
    <ul className={clsx(STYLE_CONFIG.BASE, className)}>
      {of.map((item, idx) => (
        <li key={idx} className={clsx(STYLE_CONFIG.ITEM, navHighlight && activeIdx === idx && 'font-bold text-blue-600')}>
          {trackSelection || navHighlight
            ? children(item, idx, {
                selectedIdx,
                setSelectedIdx,
                isActive: navHighlight ? activeIdx === idx : undefined,
                setActiveIdx: navHighlight ? setActiveIdx : undefined,
              })
            : children(item, idx)}
        </li>
      ))}
    </ul>
  );
}

ChousyEach.propTypes = {
  of: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  trackSelection: PropTypes.bool,
  navHighlight: PropTypes.bool,
  getPath: PropTypes.func,
  currentPath: PropTypes.string,
};
