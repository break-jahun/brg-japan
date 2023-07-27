import VerificationIntro from '@/specifics/certification/bridges/searchSection/VerificationIntro';
import SearchActionContainer from '@/specifics/certification/bridges/searchSection/SearchActionContainer';
import SearchSectionBox from '@/specifics/certification/components/SearchSectionBox';

const SearchSection = () => {
  return (
    <SearchSectionBox>
      <VerificationIntro />
      <SearchActionContainer />
    </SearchSectionBox>
  );
};

export default SearchSection;
