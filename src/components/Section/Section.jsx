import PropTypes from 'prop-types';
import { SectionTitle } from './Section.styles';

export default function Section({ title, children }) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
