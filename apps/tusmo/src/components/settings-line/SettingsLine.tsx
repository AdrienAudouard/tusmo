import './SettingsLine.scss';
import React from 'react';

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
  action: JSX.Element;
}

function SettingsLine({
  icon, title, description, action,
}: Props) {
  return (
    <div className="settings-line">
      <span className="settings-line__description-container">
        <span className="settings-line__description-container__icon-container">
          {icon}
        </span>
        <span className="settings-line__description-container__text-container">
          <span>{title}</span>
          <span className="settings-line__description-container__text-container__description">{description}</span>
        </span>
      </span>
      <div className="settings-line__spacer" />
      {action}
    </div>
  );
}

export default SettingsLine;
