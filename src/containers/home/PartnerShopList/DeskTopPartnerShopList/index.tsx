import PartnerShopInfoCard from 'brg-japan/containers/home/PartnerShopList/PartnerShopInfoCard';
import { PartnerShopData } from 'brg-japan/containers/home/PartnerShopList/shared/PartnershopData';

function DeskTopPartnerShopList() {
  return (
    <>
      {PartnerShopData.map((item) => (
        <PartnerShopInfoCard
          address={item.address}
          image={item.image}
          name={item.name}
          phone={item.phone}
        />
      ))}
    </>
  );
}

export default DeskTopPartnerShopList;
