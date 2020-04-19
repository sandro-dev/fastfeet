import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import Avatar from '~/components/Avatar';

import {
  Container,
  Content,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  BtnLogout,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state?.user?.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  console.tron.log('profile --> ', profile);

  return (
    <Container>
      <Content>
        {profile?.avatar ? (
          <Avatar isPhoto url={profile?.avatar?.url} custom={{ size: 136 }} />
        ) : (
          <>
            {profile?.name && (
              <Avatar
                fullname={profile?.name}
                custom={{ size: 136, font: 60 }}
              />
            )}
          </>
        )}

        <ProfileDetails>
          <ProfileLabel>Nome Completo</ProfileLabel>
          <ProfileInfo>{profile?.name}</ProfileInfo>
          <ProfileLabel>Email</ProfileLabel>
          <ProfileInfo>{profile?.email}</ProfileInfo>
          <ProfileLabel>Data de cadastro</ProfileLabel>
          <ProfileInfo>{profile?.created_at}</ProfileInfo>
        </ProfileDetails>

        <BtnLogout onPress={handleLogout} loading={false}>
          Logout
        </BtnLogout>
      </Content>
    </Container>
  );
}
