import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import styles from './Items.module.scss';
import { Item } from '../../components';
import { fetchItems, selectItems } from '../../redux/slices/itemsSlice';

const Items: React.FC = () => {
  const dispatch = useAppDispatch();
  const {itemsArray, isLoaded, loadingRejected} = useSelector(selectItems)
  useEffect(() => {
    dispatch(fetchItems());
  }, [])

  return (
    <div className={styles.items_wrapper}>
      <div className={styles.title_wrapper}>
        <h2>HEADPHONES</h2>
      </div>
      <div className={styles.items_box}>
        {itemsArray.map((obj, ind) => (<Item 
        key={ind}
        {...obj}/>))}
      </div>
    </div>
  )
}

export default Items;