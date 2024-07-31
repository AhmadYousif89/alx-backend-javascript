interface MajorCredits {
  brand: 'MajorCredits';
  credits: number;
}

interface MinorCredits {
  brand: 'MinorCredits';
  credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const credits = subject1.credits + subject2.credits;
  return { brand: 'MajorCredits', credits };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const credits = subject1.credits + subject2.credits;
  return { brand: 'MinorCredits', credits };
}
