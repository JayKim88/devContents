import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ImageModal from '../components/ImageModal';

function ImageModalContainer() {
  const { modalVisible, bgColor, src, alt } = useSelector(
    state => ({
      modalVisible: state.imageModal.modalVisible,
      bgColor: state.imageModal.bgColor,
      src: state.imageModal.src,
      alt: state.imageModal.alt,
    }),
    shallowEqual
  );
  // 객체로 묶어서 반환하면 참조가 바뀌어 버리므로 객체를 반환하지 않는 형태로 변경하여 리렌더링 방지.
  // const modalVisible = useSelector(state => state.imageModal.modalVisible);
  // const bgColor = useSelector(state => state.imageModal.bgColor);
  // const src = useSelector(state => state.imageModal.src);
  // const alt = useSelector(state => state.imageModal.alt);

  console.log('clicked image data', modalVisible, bgColor, src, alt);

  return <ImageModal modalVisible={modalVisible} bgColor={bgColor} src={src} alt={alt} />;
}

export default ImageModalContainer;
