import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import useCoinsByCategoryId from '../../hooks/useCoinsByCategoryId';
import styles from '../ui/Border.module.css';
import CoinList from '../ui/CoinList';
import Container from '../ui/Container';
import PageTitle from '../ui/PageTitle';
import PX from '../ui/Px';

const Category: React.FC<RouteComponentProps> = ({ match: { params } }: any) => {
  const { data: categories } = useCategories();
  const current = categories && categories.filter(c => c.id === params.id)[0];

  const { data: coins } = useCoinsByCategoryId(params.id);

  return (
    <IonPage>
      <IonHeader className={styles.HeaderNoBorder} mode="md">
        <IonToolbar mode="md">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/search" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Container>
          <PX size={4}>
            <PageTitle>👋 {current?.name}</PageTitle>
            <p className="">{current?.content}</p>

            <span className="text-sm font-bold block mt-6">In this list</span>
            <span className="text-xs text-gray-600">
              {coins?.length > 1 ? coins?.length + ' coins' : coins?.length + ' coin'}
            </span>

            <div className="mt-4">{coins && <CoinList coins={coins} border="border-t" />}</div>
          </PX>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Category;
