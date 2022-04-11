import { Helmet as ReactHelmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default function Helmet({ title }) {
  return (
    <HelmetProvider>
      <ReactHelmet>
        <title>{title}</title>
      </ReactHelmet>
    </HelmetProvider>
  );
}
