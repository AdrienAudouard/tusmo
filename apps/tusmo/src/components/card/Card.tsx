import React, { PropsWithChildren } from 'react';
import './Card.scss';

interface Props {
  className?: string;
  success?: boolean;
}

function Card({ children, className, success }: PropsWithChildren & Props) {
  return <div className={`card ${className} card__${success ? 'success' : ''}`}>{children}</div>;
}

export default Card;
