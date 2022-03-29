import React, {usesState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { text, title } = Typography;
const { option } = Select;

const News = ({simplified}) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: "cryptocurrency", count: simplified ? 6 : 12 });

  return (
    <div>News</div>
  )
}

export default News