import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator } from 'react-native';

import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';

import Avatar from '~/components/Avatar';
import CardItem from '~/components/CardItem';
import formatDate from '~/util/formatDate';

import {
  Container,
  Header,
  WelcomeContainer,
  WelcomeMessage,
  WelcomeName,
  BtnSignout,
  Content,
  PageTitle,
  Filters,
  BtnFilter,
  BtnFilterText,
  Feed,
} from './styles';

export default function Deliveries() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state?.user?.profile);
  const auth = useSelector((state) => state.auth);

  const [deliveries, setDeliveries] = useState([]);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalpages, setTotalpages] = useState();
  const [loading, setLoading] = useState(true);

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!auth.id) return;

    async function loadDeliveries() {
      const response = await api.get(
        `deliverymen/${auth.id}/deliveries/${filter}`,
        {
          params: { page },
        }
      );

      const data = response.data.results.map((delivery) => ({
        ...delivery,
        formated_start: formatDate(delivery.start_date),
        formated_end: formatDate(delivery.end_date),
      }));

      setDeliveries(data);
      setTotalpages(response.data.total_page);
      setLoading(false);
    }
    loadDeliveries();
  }, [page, totalpages, filter]);

  async function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        {profile?.avatar ? (
          <Avatar isPhoto url={profile?.avatar?.url} custom={{ size: 68 }} />
        ) : (
          <Avatar fullname={profile?.name} custom={{ size: 68, font: 20 }} />
        )}

        <WelcomeContainer>
          <WelcomeMessage>Bem-vindo de volta,</WelcomeMessage>
          <WelcomeName>{profile && profile.name}</WelcomeName>
        </WelcomeContainer>

        <BtnSignout onPress={handleLogout}>
          <Icon name="exit-to-app" size={26} color="#E74040" />
        </BtnSignout>
      </Header>

      <Content>
        <PageTitle>Entregas</PageTitle>

        <Filters>
          <BtnFilter
            onPress={() => {
              setFilter('');
              setIsActive(!isActive);
            }}
          >
            <BtnFilterText isActive={isActive}>Pendentes</BtnFilterText>
          </BtnFilter>
          <BtnFilter
            onPress={() => {
              setFilter('finished');
              setIsActive(!isActive);
            }}
          >
            <BtnFilterText isActive={!isActive}>Entregues</BtnFilterText>
          </BtnFilter>
        </Filters>
      </Content>

      {loading ? (
        <ActivityIndicator
          color="#7d40e7"
          size="large"
          style={{ marginTop: 100 }}
        />
      ) : (
        <Feed
          data={deliveries}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <CardItem data={item} />}
        />
      )}
    </Container>
  );
}
