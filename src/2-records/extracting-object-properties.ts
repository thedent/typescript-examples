/**
 * @description how to access object properties
 */

type Member = {
  username: string;
  experience: string;
  premium: boolean;
};

type ExperienceType = Member['experience'];
type PremiumType = Member['premium'];
