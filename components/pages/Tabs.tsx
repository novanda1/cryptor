import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { cog, home, list, person } from 'ionicons/icons';
import { FiActivity, FiHome, FiSearch, FiUser } from 'react-icons/fi';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { Redirect, Route } from 'react-router-dom';

import Home from './Feed';
import ListDetail from './ListDetail';
import Lists from './Lists';
import Settings from './Settings';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/home" component={Home} exact={true} />
        <Route path="/tabs/portfolio" component={Lists} exact={true} />
        <Route path="/tabs/portfolio/:listId" component={ListDetail} exact={true} />
        <Route path="/tabs/search" component={Settings} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar
        slot="bottom"
        className="bg-transparent h-16"
        style={{ boxShadow: '0px -20px 50px rgba(155, 155, 155, 0.1)' }}
      >
        <IonTabButton className="bg-transparent" tab="tab1" href="/tabs/home">
          <FiHome width={24} height={24} style={{ width: 24, height: 24 }} />
        </IonTabButton>
        <IonTabButton className="bg-transparent" tab="tab2" href="/tabs/portfolio">
          <FiActivity width={24} height={24} style={{ width: 24, height: 24 }} />
        </IonTabButton>
        <IonTabButton className="bg-transparent" tab="tab3" href="/tabs/search">
          <FiSearch width={24} height={24} style={{ width: 24, height: 24 }} />
        </IonTabButton>
        <IonTabButton className="bg-transparent" tab="tab3" href="/tabs/search">
          <RiMoneyDollarBoxLine width={24} height={24} style={{ width: 24, height: 24 }} />
        </IonTabButton>
        <IonTabButton className="bg-transparent" tab="tab3" href="/tabs/search">
          <FiUser width={24} height={24} style={{ width: 24, height: 24 }} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
