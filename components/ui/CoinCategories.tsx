import { IonRouterLink } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import styles from './Scrollbar.module.css';

type Props = {};

const CoinCategories: React.FC<Props> = () => {
  const { data: categories } = useCategories();
  const { push } = useHistory();

  return (
    <div className="overflow-x-auto overflow-y-hidden -mx-4 my-10 pl-4 py-1">
      <div
        className={'flex flex-wrap -m-2 scrol' + styles.hideScrollbar}
        style={{ width: categories?.length > 1 ? '900%' : 0 }}
      >
        {categories &&
          categories.map(cat => {
            return (
              <IonRouterLink key={cat.id} onClick={() => push(`/tabs/search/${cat.id}`)}>
                <div className="px-4 hover:bg-gray-100 transition ease-in-out py-2 rounded-full border border-gray-200 mx-1 my-1.5">
                  {cat.name}
                </div>
              </IonRouterLink>
            );
          })}
      </div>
    </div>
  );
};

export default CoinCategories;
