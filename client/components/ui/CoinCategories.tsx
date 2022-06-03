import randomEmoji from '@/lib/ranmoji';
import { IonRouterLink } from '@ionic/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import styles from './Scrollbar.module.css';

type Props = {};

const CoinCategories: React.FC<Props> = () => {
  const { data: categories } = useCategories();
  const [emojis, setEmojis] = useState<any>();
  const { push } = useHistory();

  useEffect(() => {
    const fetchEmojis = async () => {
      const e = await randomEmoji();
      setEmojis(e);
    };

    if (categories?.length) fetchEmojis();
  }, [categories?.length]);

  return (
    <div className="overflow-x-auto overflow-y-hidden -mx-4 my-10 pl-4 py-1">
      <div
        className={'flex flex-wrap -m-2 scrol' + styles.hideScrollbar}
        style={{ width: categories?.length > 1 ? '900%' : 0 }}
      >
        {categories &&
          categories.map((cat, index) => {
            return (
              <IonRouterLink key={cat.id} onClick={() => push(`/tabs/search/${cat.id}`)}>
                <div className="flex items-center gap-1 px-4 hover:bg-gray-100 transition ease-in-out py-2 rounded-full border border-gray-200 mx-1 my-1.5">
                  <Image
                    width={128/8}
                    height={128/8}
                    alt={cat.name}
                    src={
                      emojis
                        ? (Object.values(emojis)[index] as string)
                        : 'https://github.githubassets.com/images/icons/emoji/unicode/1f36b.png?v8'
                    }
                  />
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
