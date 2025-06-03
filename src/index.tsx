import React from 'react';

interface ConditionalRenderProps {
  condition: boolean;
  children: {
    true: React.ReactNode;
    false: React.ReactNode;
  };
}

export const ConditionalRender: React.FC<ConditionalRenderProps> = ({ condition, children }) => {
  return <>{condition ? children.true : children.false}</>;
};
