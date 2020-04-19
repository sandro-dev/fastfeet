import React, { useRef, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import api from '~/services/api';
import {
  Container,
  Background,
  Content,
  CameraView,
  Camera,
  PreviewPhoto,
  ButtonSend,
  ButtonCapture,
} from './styles';

export default function DeliveryConfirm() {
  // eslint-disable-next-line prefer-const
  let cameraRef = useRef(null);
  const [pictureUri, setPictureUri] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const auth = useSelector((state) => state.auth);
  const { delivery } = route.params;

  async function handleSubmit() {
    const dataFile = new FormData();
    dataFile.append('file', {
      type: 'image/jpg',
      uri: pictureUri,
      name: `signature-delivery_${delivery.id}.jpg`,
    });

    try {
      setLoading(true);
      const response = await api.post('files', dataFile);
      const { id: signature_id } = response.data;

      if (response) {
        const result = await api.put(
          `deliverymen/${auth.id}/deliveries/${delivery.id}`,
          { signature_id, end_date: new Date() }
        );

        if (result) {
          Alert.alert(
            'Assinatura enviada com sucesso!',
            'A entrega está confirmada'
          );
          navigation.navigate('Deliveries');
        } else {
          Alert.alert(
            'Houve uma falha',
            'Não foi possível confirmar a entrega. Tente novamente.'
          );
        }
      } else {
        Alert.alert('Não foi possível enviar a foto da assinatura');
      }

      setLoading(false);
    } catch (error) {
      Alert.alert('Ocorreu uma falha', 'Não foi possível confirmar a entrega');
      setLoading(false);
    }
  }

  async function takePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setPictureUri(data.uri);
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <CameraView>
          {pictureUri ? (
            <PreviewPhoto source={{ uri: pictureUri }} />
          ) : (
            <Camera ref={cameraRef} type="back" captureAudio={false}>
              <ButtonCapture onPress={() => takePicture(cameraRef)}>
                <Icon name="photo-camera" size={24} color="#fff" />
              </ButtonCapture>
            </Camera>
          )}
        </CameraView>

        <ButtonSend
          loading={loading}
          disabled={!pictureUri}
          onPress={handleSubmit}
        >
          {pictureUri ? 'Enviar' : 'Capture a foto'}
        </ButtonSend>
      </Content>
    </Container>
  );
}
