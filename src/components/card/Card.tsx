import { PropsWithChildren } from 'react';
import './Card.scss';

interface Props {
  className?: string;
}

export function Card({ children, className }: PropsWithChildren & Props) {
  return <div className={`card ${className}`}>{children}</div>;
}

export default Card;
