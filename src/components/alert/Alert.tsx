import React, { useState, useEffect, useCallback } from 'react';
import { alertService, AlertType } from '../../helpers/alertService';
import { AlertBox, AlertContainer, AlertOverlay, AlertsWrapper, CloseButton } from './Alert.style';

interface Props {
  id?: string;
  fade?: boolean;
}

const AlertDialog: React.FC<Props> = ({
  id = 'default-alert',
  fade = true
}) => {
  const [alerts, setAlerts] = useState(Array<any>());

  const removeAlert = useCallback((alert: any) => {
    if (fade) {
      const alertWithFade = { ...alert, fade: true };
      setAlerts((alerts) =>
        alerts.map((x) => (x === alert ? alertWithFade : x))
      );

      setTimeout(() => {
        setAlerts((alerts) => alerts.filter((x) => x !== alertWithFade));
      }, 250);
    } else {
      setAlerts((alerts) => alerts.filter((x) => x !== alert));
    }
  }, [fade]);

  useEffect(() => {
    const subscription = alertService.onAlert(id).subscribe((alert: any) => {
      if (!alert.message) {
        setAlerts((alerts) => {
          const filteredAlerts = alerts.filter((x) => x.keepAfterRouteChange);

          filteredAlerts.forEach((x) => delete x.keepAfterRouteChange);
          return filteredAlerts;
        });
      } else {
        setAlerts((alerts) => [...alerts, alert]);

        if (alert.autoClose) {
          setTimeout(() => removeAlert(alert), 5000);
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [id, removeAlert]);

  const selectBackground = (type: keyof typeof AlertType) => {
    switch (type) {
      case AlertType.Success:
        return 'bg-green-dark';
      case AlertType.Error:
        return 'bg-red';
      case AlertType.Warning:
        return 'bg-yellow';
      default:
        return 'bg-green-dark';
    }
  };

  if (!alerts.length) return null;

  return (
    <AlertsWrapper>
      {alerts.map((alert, index) => (
        <AlertContainer key={index}>
          <AlertOverlay onClick={() => removeAlert(alert)} />
          <AlertBox className={selectBackground(alert.type)}>
            <CloseButton onClick={() => removeAlert(alert)}>&times;</CloseButton>
            <div>{alert.message}</div>
          </AlertBox>
        </AlertContainer>
      ))}
    </AlertsWrapper>
  );
};

export default AlertDialog;
