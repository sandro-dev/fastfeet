import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import formatDate from '~/util/formatDate';

import api from '~/services/api';
import {
  Background,
  Container,
  TitleContainer,
  ContentContainer,
  ProblemFeed,
  ProblemItem,
  ProblemDescription,
  ProblemDate,
} from './styles';

export default function Problems() {
  const route = useRoute();
  const { delivery } = route.params;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`delivery/${delivery.id}/problems`);
      const data = response.data.results.map((problem) => ({
        id: problem.id,
        deliveryId: problem.delivery_id,
        description: problem.description,
        format_createdAt: formatDate(problem.createdAt),
      }));
      setProblems(data);
    }

    loadProblems();
  }, [delivery.id]);

  return (
    <Container>
      <Background />
      <ContentContainer>
        <TitleContainer>{`Encomenda ${delivery.id}`}</TitleContainer>
        <ProblemFeed
          data={problems}
          keyExtractor={(problem) => String(problem.id)}
          ListEmptyComponent={
            <ProblemItem>
              <ProblemDescription>
                Nenhum problema encontrado
              </ProblemDescription>
            </ProblemItem>
          }
          renderItem={({ item }) => (
            <ProblemItem>
              <ProblemDescription>{item.description}</ProblemDescription>
              <ProblemDate>{item.format_createdAt}</ProblemDate>
            </ProblemItem>
          )}
        />
      </ContentContainer>
    </Container>
  );
}
