
import PropTypes from 'prop-types';
import "../../scss/components/buttons.scss"

export default function PrimaryButton({btnText, btnLink}) {

  PrimaryButton.propTypes = {
    btnText: PropTypes.string.isRequired,
    btnLink: PropTypes.string.isRequired,
  };

  return (
      <a className="primary-button" href={btnLink}>{btnText}</a> 
  );
}
