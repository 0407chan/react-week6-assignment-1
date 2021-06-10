import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  useParams,
} from 'react-router-dom';

import {
  loadRestaurantDetail,
} from './actions';

import { get } from './utils';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, []);

  const restaurantDetail = useSelector(get('restaurantDetail'));

  return (restaurantDetail === null
    ? <div>404 Not Found</div>
    : (
      <div>
        <h1>{restaurantDetail.name}</h1>
        <p>
          주소:
          {' '}
          {restaurantDetail.address}
        </p>
        <h2>메뉴</h2>
        <ul>
          {restaurantDetail.menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              {menuItem.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
