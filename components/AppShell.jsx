import { StatusBar, Style } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './Menu';

import Tabs from './pages/Tabs';

import { SWRConfig } from 'swr';

window.matchMedia('(prefers-color-scheme: dark)').addListener(async status => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

const AppShell = () => {
  const fetcher = (...args) =>
    fetch(...args, {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
      },
    }).then(res => res.json());

  return (
    <IonApp>
      <SWRConfig
        value={{
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
        fetcher={fetcher}
      >
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/tabs" render={() => <Tabs />} />
              <Route exact path="/" render={() => <Redirect to="/tabs" />} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </SWRConfig>
    </IonApp>
  );
};

export default AppShell;
