import React from 'react';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import './index.sass';

export default function Detail() {
  const { name } = useParams();
  const detail = useSelector(state => {
    return (state.list.list.filter(item => item.name === name) || [])[0] || {}
  })
  console.log(detail)
  return (
    <div>
      <p>name:{detail.name}</p>
      <p>calories:{detail.calories}</p>
      <p>fat:{detail.fat}</p>
      <p>carbs:{detail.carbs}</p>
      <p>protein:{detail.protein}</p>
    </div>
  );
}