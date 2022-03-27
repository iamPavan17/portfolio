import { Helmet as ReactHelmet } from "react-helmet";
import PropTypes from "prop-types";

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default function Helmet({ title }) {
  return (
    <ReactHelmet>
      <title>{title}</title>
    </ReactHelmet>
  );
}
