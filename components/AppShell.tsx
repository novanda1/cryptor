import { StatusBar, Style } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Coin from './pages/Coin';
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
  const { width } = useWindowDimensions();
  if (width > 500)
    return (
      <div className="bg-gray-800 text-white flex justify-start items-center w-full h-full">
        <p className="w-screen text-center">Use mobile phone!</p>
      </div>
    );
  return (
    <IonApp>
      {/*
 // @ts-ignore */}
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            <Route path="/tabs" render={() => <Tabs />} />
            <Route path="/coin/:id" component={Coin} />

            <Route exact path="/" render={() => <Redirect to="/tabs" />} />
          </IonRouterOutlet>
        </IonSplitPane>
        {children}
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
