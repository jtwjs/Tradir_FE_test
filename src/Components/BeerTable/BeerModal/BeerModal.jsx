import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MTableBodyRow } from 'material-table';

import Modal from 'Components/Modal/Modal';

BeerModal.propTypes = {};

function BeerModal(props) {
  const infoData = Object.entries(props.data)
    .filter((v) => typeof v[1] !== 'object' || Array.isArray(v[1]))
    .slice(1);

  const handleEnter = useCallback((e, cb) => {
    e.keyCode === 13 && cb(e);
  }, []);

  return (
    <Modal
      id={`${props.data.name}-${props.data.id}`}
      trigger={({ handleOpen, isOpen }) => (
        <MTableBodyRow
          {...props}
          aria-haspopup="true"
          aria-pressed={isOpen}
          tabIndex="0"
          onRowClick={handleOpen}
          onKeyDown={(e) => handleEnter(e, handleOpen)}
        />
      )}>
      <Modal.Header>
        <Title>Beer Detail</Title>
      </Modal.Header>
      <Modal.Contents>
        <ContentWrap>
          <FigureWrap>
            <FigureImg src={props.data.image_url} alt="맥주 이미지" />
          </FigureWrap>
          <DetailInfoWrap>
            {infoData.map(([title, desc]) => (
              <DetailInfo key={title}>
                <DetailTitle>
                  <span aria-hidden="true">{title.toUpperCase()}</span>
                  <span className="a11y">{title}</span>
                </DetailTitle>
                <DetailDesc>{desc}</DetailDesc>
              </DetailInfo>
            ))}
          </DetailInfoWrap>
        </ContentWrap>
      </Modal.Contents>
    </Modal>
  );
}

export default BeerModal;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
`;

const ContentWrap = styled.div`
  display: flex;
  gap: 3rem;
  width: 50rem;
  padding: 0 1rem;
`;

const FigureWrap = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FigureImg = styled.img`
  display: block;
  height: 23rem;
  object-fit: contain;
`;

const DetailInfoWrap = styled.div`
  width: 100%;
  height: 24rem;
  overflow-y: auto;
`;

const DetailInfo = styled.dl`
  width: 100%;
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
`;

const DetailTitle = styled.dt`
  align-self: flex-start;
  font-weight: 600;
  line-height: 1.5;
`;

const DetailDesc = styled.dd``;
