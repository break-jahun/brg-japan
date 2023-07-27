import useGetHolderAndLabelSummary from '@/specifics/grading/modules/hooks/useGetHolderAndLabelSummary';
import TwoColorDescriptionCard from '@/specifics/grading/components/TwoColorDescriptionCard';

function TwoColorDescriptionSection() {
  const { twoColorDescriptionSummary } = useGetHolderAndLabelSummary();
  return (
    <>
      {twoColorDescriptionSummary.map((summary) => (
        <TwoColorDescriptionCard
          key={summary.title}
          bgColor={summary.bgColor}
          title={summary.title}
          description={summary.description}
          image={summary.image}
          alt={summary.alt}
        />
      ))}
    </>
  );
}

export default TwoColorDescriptionSection;
