
import PropTypes from 'prop-types';
export default function SecondaryButton({btnText, btnLink}) {
  
SecondaryButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnLink: PropTypes.string.isRequired,
};

  return (
    <a className="secondary-button" href={btnLink} >{btnText}</a>  
  );
}
