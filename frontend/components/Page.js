import PropTypes from 'prop-types';

const Page = ({ children }) => <main>{children}</main>;

export default Page;

Page.propTypes = {
  children: PropTypes.object.isRequired,
};
