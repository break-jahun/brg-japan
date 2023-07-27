import { RadioGroup } from '@mui/material';
import { AddressAttributes } from '@/common/types/user/address';
import AddressListItem from './AddressListItem';

interface Props {
  selectedIndex: null | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  list: AddressAttributes[];
  handleModifyClick: (item: AddressAttributes) => void;
}

const AddressList = (props: Props) => {
  const { selectedIndex, handleChange, list, handleModifyClick } = props;

  return (
    <RadioGroup row value={selectedIndex} onChange={handleChange}>
      {list.map((address, index) => (
        <AddressListItem
          key={address.id}
          address={address}
          value={index}
          handleModifyClick={handleModifyClick}
        />
      ))}
    </RadioGroup>
  );
};

export default AddressList;
