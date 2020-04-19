import { takeLatest, call, put, all } from 'redux-saga/effects';
import { parseISO, format } from 'date-fns';
import { Alert } from 'react-native';

import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* singIn({ payload }) {
  try {
    const { id } = payload;

    console.tron.log('payload -> ', payload);

    const response = yield call(api.get, `deliverymen/${id}`);
    console.tron.log('### response -> ', response.data);

    const data = {
      name: response.data.name,
      email: response.data.email,
      created_at: format(parseISO(response.data.createdAt), 'dd/MM/yyyy'),
      avatar: response.data.avatar,
    };

    console.tron.log('data -> ', data);

    yield put(signInSuccess(id, data));
  } catch (err) {
    Alert.alert(
      'Falha no Login',
      'Houve um erro ao efetuar o login, verifique seus dados'
    );

    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)]);
