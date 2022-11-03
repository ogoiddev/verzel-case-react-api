import React from 'react';
import ReactLoading from 'react-loading';
import { LoadingContainer } from './styles';

interface ITypesColor {
  color: string;
}

export const Loading = ({ color }: ITypesColor) => (
  <LoadingContainer>
    <ReactLoading
      type='bubbles'
      color={color} 
      height={'10%'}
      width={'20%'}
      />
  </LoadingContainer>
);

export default Loading;