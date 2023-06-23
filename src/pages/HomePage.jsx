import { getDatas } from 'API/fetch';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [arrayDatas, setArrayDatas] = useState(null);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const datas = await getDatas();
        const arrayDatas = datas.results;

        setArrayDatas(arrayDatas);
      } catch (error) {}
    };

    fetchDatas();
  }, []);

  console.log('Масив даних, отриманий з бекенду', arrayDatas);

  return <div>HOME PAGE</div>;
};

export default HomePage;

// хук useEffect викликає функцію getDatas отримання даних з бекенду при завантажені сторінки ([])
// хук useState використовується для зберігання змінних та функції, які їх змінюють
