import { VStack } from '@/common/components/VStack';
import { Box, Typography } from '@mui/material';
import { AffiliatedShopAttributes } from 'brg-japan/containers/PartnerShop/api';
import LinkIcon from '@mui/icons-material/Link';
import { HStack } from '@/common/components/HStack';
import Link from 'next/link';

type Props = {
  affiliatedShop: AffiliatedShopAttributes | undefined;
};

function AffiliatedShopInfo(props: Props) {
  const { affiliatedShop } = props;

  const address = affiliatedShop?.address;
  const phone = affiliatedShop?.phone;
  const linkUrl = affiliatedShop?.linkUrl;

  return (
    <VStack padding="16px" bgcolor="rgb(245, 245, 245)" gap="16px">
      <Typography variant="subtitle1" fontWeight={700}>
        Information
      </Typography>
      {address ? (
        <Typography variant="subtitle1">{address}</Typography>
      ) : (
        <Typography variant="subtitle1" color="rgb(189, 189, 189)">
          住所
        </Typography>
      )}

      {phone ? (
        <Typography variant="subtitle1">{phone}</Typography>
      ) : (
        <Typography variant="subtitle1" color="rgb(189, 189, 189)">
          電話番号
        </Typography>
      )}
      <HStack justifyContent="center">
        {linkUrl ? (
          <Link href={linkUrl} target="_blank" passHref>
            <LinkIcon />
          </Link>
        ) : (
          <LinkIcon sx={{ color: 'rgb(189, 189, 189)' }} />
        )}
      </HStack>
    </VStack>
  );
}

export default AffiliatedShopInfo;
