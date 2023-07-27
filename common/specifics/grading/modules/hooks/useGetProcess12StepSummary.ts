import useProcessParser from '@/specifics/grading/modules/hooks/parser/process/useProcessParser';

function useGetProcess12StepSummary() {
  const step12Text = useProcessParser();

  const step12Summary = [
    {
      title: 'STEP 1',
      description: step12Text.stepText1,
      image: '/images/processStep12/step_01.png',
    },
    {
      title: 'STEP 2',
      description: step12Text.stepText2,
      image: '/images/processStep12/step_02.png',
    },
    {
      title: 'STEP 3',
      description: step12Text.stepText3,
      image: '/images/processStep12/step_03.png',
    },
    {
      title: 'STEP 4',
      description: step12Text.stepText4,
      image: '/images/processStep12/step_04.png',
    },
    {
      title: 'STEP 5',
      description: step12Text.stepText5,
      image: '/images/processStep12/step_05.png',
    },
    {
      title: 'STEP 6',
      description: step12Text.stepText6,
      image: '/images/processStep12/step_06.png',
    },
    {
      title: 'STEP 7',
      description: step12Text.stepText7,
      image: '/images/processStep12/step_07.png',
    },
    {
      title: 'STEP 8',
      description: step12Text.stepText8,
      image: '/images/processStep12/step_08.png',
    },
    {
      title: 'STEP 9',
      description: step12Text.stepText9,
      image: '/images/processStep12/step_09.png',
    },
    {
      title: 'STEP 10',
      description: step12Text.stepText10,
      image: '/images/processStep12/step_10.png',
    },
    {
      title: 'STEP 11',
      description: step12Text.stepText11,
      image: '/images/processStep12/step_11.png',
    },
    {
      title: 'STEP 12',
      description: step12Text.stepText12,
      image: '/images/processStep12/step_12.png',
    },
  ];

  return step12Summary;
}

export default useGetProcess12StepSummary;
