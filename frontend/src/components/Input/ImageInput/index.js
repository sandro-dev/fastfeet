import React, { useRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { MdImage } from 'react-icons/md';

import api from '~/services/api';
import { Container } from './styles';
import AvatarName from '~/components/Avatar';

export default function ImageInput({ name, iconName, fullname, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);
  const [avatarId, setAvatarId] = useState(defaultValue);

  const handlePreview = useCallback(async (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const data = new FormData();
      data.append('file', e.target.files[0]);
      const response = await api.post('files', data);
      const { id, url } = response.data;
      setAvatarId(id);
      setPreview(url);
    } else {
      setPreview(null);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      getValue(ref, value) {
        return value || ref.getAttribute('data-id');
      },
      clearValue(ref) {
        ref.value = '';
        setAvatarId(null);
        setPreview(null);
      },
      setValue(_, value) {
        if (value) {
          setAvatarId(value.id);
          setPreview(value.url);
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container htmlFor={fieldName}>
      {preview ? (
        <div className="image-placeholder">
          <img src={preview} alt="Preview" />
        </div>
      ) : (
        <div
          className="image-placeholder"
          title="Clique para adicionar uma foto"
        >
          {iconName ? (
            <AvatarName
              fullname={fullname}
              onlyIcon
              styleIcon={{
                margin: '0px',
                fontSize: 66,
                size: 148,
              }}
            />
          ) : (
            <>
              <MdImage color="#ddd" size={36} />
              <span>Adicionar foto</span>
            </>
          )}
        </div>
      )}
      <input
        id={fieldName}
        data-id={avatarId}
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handlePreview}
        {...rest}
      />
    </Container>
  );
}

ImageInput.propTypes = {
  name: PropTypes.string.isRequired,
  fullname: PropTypes.string,
  iconName: PropTypes.bool,
};
ImageInput.defaultProps = {
  iconName: false,
  fullname: '',
};
