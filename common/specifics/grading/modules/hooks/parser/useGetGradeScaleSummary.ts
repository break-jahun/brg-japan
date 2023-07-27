import useScaleParser from '@/specifics/grading/modules/hooks/parser/scale/useScaleParser';

function useGetGradeScaleSummary() {
  const gradeDescription = useScaleParser();
  const gradingScaleDescription = [
    {
      id: 0,
      title: '10 GEM MINT',
      mobileTitle: '10',
      description: gradeDescription.description10,
    },
    {
      id: 1,
      title: '9 MINT',
      mobileTitle: '9',
      description: gradeDescription.description9,
    },
    {
      id: 2,
      title: '8.5 NM-MT+',
      mobileTitle: '8.5',
      description: gradeDescription.description8_5,
    },
    {
      id: 3,
      title: '8 NM-MT',
      mobileTitle: '8',
      description: gradeDescription.description8,
    },
    {
      id: 4,
      title: '7.5 NR MT+',
      mobileTitle: '7.5',
      description: gradeDescription.description7_5,
    },
    {
      id: 5,
      title: '7 NR MT',
      mobileTitle: '7',
      description: gradeDescription.description7,
    },
    {
      id: 6,
      title: '6.5 & 6 EX-NM',
      mobileTitle: '6.5 & 6',
      description: gradeDescription.description6,
    },
    {
      id: 7,
      title: '5.5 & 5 EX',
      mobileTitle: '5.5 & 5',
      description: gradeDescription.description5,
    },
    {
      id: 8,
      title: '4.5 & 4 VG-EX',
      mobileTitle: '4.5 & 4',
      description: gradeDescription.description4,
    },
    {
      id: 9,
      title: '3.5 & 3 VG',
      mobileTitle: '3.5 & 3',
      description: gradeDescription.description3,
    },
    {
      id: 10,
      title: '2.5 & 2 GOOD',
      mobileTitle: '2.5 & 2',
      description: gradeDescription.description2,
    },
    {
      id: 11,
      title: '1.5 & 1 FAIR',
      mobileTitle: '1.5 & 1',
      description: gradeDescription.description1,
    },
  ];

  return gradingScaleDescription;
}

export default useGetGradeScaleSummary;
