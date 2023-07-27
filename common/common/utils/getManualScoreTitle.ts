const getManualScoreTitle = (grade: number): string | number => {
  if (grade === 11) {
    return 'AUTHENTIC';
  }
  if (grade === 0) {
    return '';
  }
  if (grade <= 10) {
    return grade;
  }
  return '';
};

export default getManualScoreTitle;
