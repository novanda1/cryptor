import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { cog, home, list, person } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';

import Home from './Feed';
import ListDetail from './ListDetail';
import Lists from './Lists';
import Settings from './Settings';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/feed" component={Home} exact={true} />
        <Route path="/tabs/lists" component={Lists} exact={true} />
        <Route path="/tabs/lists/:listId" component={ListDetail} exact={true} />
        <Route path="/tabs/settings" component={Settings} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/feed" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="bg-transparent">
        <IonTabButton className="bg-transparent" tab="tab1" href="/tabs/feed">
          <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton className="bg-transparent" tab="tab2" href="/tabs/lists">
          <IonIcon icon={list} />
        </IonTabButton>
        <IonTabButton className="bg-transparent" tab="tab3" href="/tabs/settings">
          <IonIcon icon={person} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
