import { SectionContainer, Title } from './Section.styled';

 const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};
export default Section