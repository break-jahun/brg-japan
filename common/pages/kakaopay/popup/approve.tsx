/* eslint-disable no-restricted-globals */
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

const PopupApprovePage = () => {
  const router = useRouter();
  const pg_token = useMemo(() => {
    if (!router.isReady) {
      return '';
    }
    return router.query.pg_token as string;
  }, [router]);

  useEffect(() => {
    if (pg_token) {
      window.opener.location.href = `${window.location.origin}/kakaopay/approve?pg_token=${pg_token}`;
      self.close();
    }
  }, [pg_token]);

  return null;
};

export default PopupApprovePage;
