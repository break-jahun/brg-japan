import { Box, styled, Container, Modal } from '@mui/material';
import { useAddressListQuery } from '@/common/modules/hooks/useAddressQuery';
import { useState, forwardRef, useEffect } from 'react';
import AddressFormModal from '@/common/bridges/AddressListModal/AddressFormModal';
import useModal from '@/common/modules/hooks/useModal';
import { AddressAttributes } from '@/common/types/user/address';
import AddressListModalHeader from './AddressListModalHeader';
import AddressList from './AddressList';
import AddressSaveButton from './AddressSaveButton';
import AddressAddButton from './AddressAddButton';

interface Props {
  handleClose: () => void;
  handleSaveClick: (address: AddressAttributes) => void;
  selectedItem?: AddressAttributes;
  onModifySuccess?: () => void;
}

const AddressListModal = forwardRef(
  (
    { handleClose, handleSaveClick, selectedItem, onModifySuccess }: Props,
    ref
  ) => {
    const { data } = useAddressListQuery();

    const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
    const [modifiedItem, setModifiedItem] = useState<null | AddressAttributes>(
      null
    );

    useEffect(() => {
      if (data) {
        if (selectedItem?.address) {
          const index = data.findIndex(
            (address) => address.address === selectedItem.address
          );
          setSelectedIndex(index);
          return;
        }

        const defaultIndex = data.findIndex((address) => address.isDefault);

        setSelectedIndex(defaultIndex);
      }
    }, [data, selectedItem?.address]);

    const {
      isOpen,
      handleOpen,
      handleClose: handleCloseFormModal,
    } = useModal();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedIndex(Number(event.target.value));
    };

    const handleAddClick = () => {
      handleOpen();
      setModifiedItem(null);
    };

    const handleModifyClick = (item: AddressAttributes) => {
      handleOpen();
      setModifiedItem(item);
    };

    if (!data) {
      return null;
    }

    return (
      <>
        <ModalContainer ref={ref} tabIndex={-1}>
          <AddressListModalHeader handleClose={handleClose} />
          <Container>
            {data && (
              <>
                <AddressList
                  selectedIndex={selectedIndex}
                  handleChange={handleChange}
                  handleModifyClick={handleModifyClick}
                  list={data}
                />
                <AddressAddButton onClick={handleAddClick} />
                <AddressSaveButton
                  onClick={() => {
                    if (selectedIndex !== null) {
                      handleSaveClick(data[selectedIndex]);
                    }
                  }}
                />
              </>
            )}
          </Container>
        </ModalContainer>
        <Modal
          open={isOpen}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AddressFormModal
            handleClose={handleCloseFormModal}
            modifiedItem={modifiedItem}
            onModifySuccess={onModifySuccess}
          />
        </Modal>
      </>
    );
  }
);

export default AddressListModal;

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '98%',
  backgroundColor: 'white',
  padding: '10px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '4px',
  maxHeight: '80vh',
  overflow: 'auto',

  [theme.breakpoints.up('sm')]: {
    width: '500px',
  },
}));
