import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalContext = createContext({});

import { ReactComponent as CloseIcon } from 'Assets/icons/ic_close.svg';

const ModalProvider = ({ value, children }) => (
  <ModalContext.Provider value={value || {}}>{children}</ModalContext.Provider>
);

Modal.propTypes = {
  trigger: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

function Modal({ trigger, children, id, className, ...restProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpener, setModalOpener] = useState(null);
  const modalRef = useRef(null);

  const handleOpen = useCallback((e) => {
    setModalOpener(document.activeElement);
    e.preventDefault();
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
    window.setTimeout(() => modalRef.current.focus());
  }, []);

  const handleClose = useCallback(() => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
    modalOpener && modalOpener.focus();
  }, [modalOpener]);

  const handleKeyTrap = useCallback((e) => {
    if (!modalRef.current) {
      return;
    }
    const focusableNodeList = modalRef.current.querySelectorAll(
      '[href], [tabindex], button, input, textarea, select',
    );
    const shiftKey = e.shiftKey;
    const eventTarget = e.target;
    const firstFocusableNode = focusableNodeList[0];
    const lastFocusableNode = focusableNodeList[focusableNodeList.length - 1];

    const isFirstFocusableNode = Object.is(eventTarget, firstFocusableNode);
    const isLastFocusableNode = Object.is(eventTarget, lastFocusableNode);

    if (shiftKey && isFirstFocusableNode) {
      e.preventDefault();
      lastFocusableNode.focus();
    }
    if (!shiftKey && isLastFocusableNode) {
      e.preventDefault();
      firstFocusableNode.focus();
    }
  }, []);

  useEffect(() => {
    const keyListenerMap = new Map([
      [27, handleClose],
      [9, handleKeyTrap],
    ]);

    function handleKeyListener(e) {
      const listener = keyListenerMap.get(e.keyCode);
      typeof listener === 'function' && listener(e);
    }
    window.addEventListener('keydown', handleKeyListener);

    return () => {
      window.removeEventListener('keydown', handleKeyListener);
    };
  }, [handleClose, handleKeyTrap]);

  const uuid = `modal__id-${id}`;

  return (
    <>
      {typeof trigger === 'function' && trigger({ handleOpen, isOpen })}
      {isOpen &&
        createPortal(
          <ModalProvider value={{ uuid, handleClose }}>
            <ModalContainer hidden={!isOpen}>
              <DialogModal
                ref={modalRef}
                className={className}
                tabIndex="-1"
                aria-modal="true"
                aria-labelledby={uuid}
                {...restProps}>
                {children}
              </DialogModal>
            </ModalContainer>
          </ModalProvider>,
          document.querySelector('#modal-root'),
        )}
    </>
  );
}

Modal.Header = function ModalHeader({ children }) {
  const context = useContext(ModalContext);

  return (
    <DialogModalHeader id={context.uuid}>
      <CloseBtn
        type="button"
        aria-label="모달창 닫기"
        onClick={context.handleClose}>
        <StyledCloseIcon />
      </CloseBtn>
      {children}
    </DialogModalHeader>
  );
};

Modal.Contents = function ModalContents({ children }) {
  const context = useContext(ModalContext);

  return <DialogModalContents role="group">{children}</DialogModalContents>;
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;

  &[hidden] {
    display: none;
  }
`;

const DialogModal = styled.dialog`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.white};
`;

const DialogModalHeader = styled.header`
  position: relative;
  margin-bottom: 1.6rem;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.4rem;
  height: 2.4rem;
`;
const StyledCloseIcon = styled(CloseIcon)`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.color.black};
  transition: fill ease-in-out 0.2s;
  pointer-events: none;

  &:hover {
    fill: ${({ theme }) => theme.color.gray};
  }
`;

const DialogModalContents = styled.div``;
