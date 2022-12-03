import './AppBackground.scss';
import React from 'react';

interface Props {
  className?: string
}

function AppBackground({ className }: Props) {
  return (
    <div className={`app-background ${className ?? ''}`}>
      <div className="app-background__blur" />
    </div>
  );
}

export default AppBackground;
