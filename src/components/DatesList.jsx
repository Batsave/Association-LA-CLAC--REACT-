import PrimaryButton from "./buttons/primary-button.jsx";
import SecondaryButton from "./buttons/secondary-button.jsx";
import PropTypes from "prop-types";

function DatesList({ data }) {
  DatesList.propTypes = {
    data: PropTypes.shape({
      day: "PropTypes.string",
      startTime: "PropTypes.string.isRequired",
      fullTime: "PropTypes.string.isRequired",
      priceChild: "PropTypes.string.isRequired",
      priceAdult: "PropTypes.string.isRequired",
      link: "PropTypes.string",
    }).isRequired,
  };

  return (
    <div className="seance-card">
      <div className="date">
        <p className="day">{data.day}</p>
      </div>
      <div className="info-containers">
        <div className="info-section">
          <p>
            <span className="data-title">Début à : </span>
            <span className="data-value">{data.startTime}</span>
          </p>
          <p>
            <span className="data-title">Durée : </span>
            <span className="data-value">{data.fullTime}</span>
          </p>
        </div>
        <div className="info-section">
          <p>
            <span className="data-title">Enfant : </span>
            <span className="data-value">{data.priceChild}</span>
          </p>
          <p>
            <span className="data-title">Adulte : </span>
            <span className="data-value">{data.priceAdult}</span>
          </p>
        </div>
      </div>

      <div className="btn-section">
        <PrimaryButton
          btnText="Appeler"
          btnLink="tel:0640235591"
        />
        <SecondaryButton btnText="Réserver en ligne" btnLink={data.link} />
      </div>
    </div>
  );
}

export default DatesList;
