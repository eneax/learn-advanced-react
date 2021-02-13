import PropTypes from 'prop-types';
import Header from './Header';

const Page = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Page;

Page.propTypes = {
  children: PropTypes.object.isRequired,
};
