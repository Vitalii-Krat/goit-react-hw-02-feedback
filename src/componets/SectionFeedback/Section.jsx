import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionStyles = styled.section`
  display: flex;
  width: 400px;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
`;
const Section = ({ title, children }) => {
  return (
    <SectionStyles>
      <h2>{title}</h2>
      {children}
    </SectionStyles>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export default Section;
