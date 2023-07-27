import { useCallback, useState } from 'react';

interface UsePagination {
  countPerPage: number;
}
/**
 * @remarks
 * 페이지네이션에 사용되는 상태처리를 해주는 hook입니다.
 *
 * @params
 * countPerPage - 한 페이지당 노출되는 개수
 *
 */
function usePagination(params: UsePagination) {
  const { countPerPage } = params;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * countPerPage;
  const limit = countPerPage;

  const onPageChanged = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const clearPage = () => {
    setPage(1);
  };

  return {
    page,
    offset,
    limit,
    onPageChanged,
    clearPage,
  };
}

export default usePagination;
