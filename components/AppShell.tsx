import { StatusBar, Style } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Tabs from './pages/Tabs';

window.matchMedia('(prefers-color-scheme: dark)').addListener(async status => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

setupIonicReact();
const AppShell: React.FC<any> = ({ children }) => {
  return (
    <IonApp>
      {/*
 // @ts-ignore */}
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            <Route path="/tabs" render={() => <Tabs />} />
            <Route exact path="/" render={() => <Redirect to="/tabs" />} />
          </IonRouterOutlet>
        </IonSplitPane>
        {children}
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
