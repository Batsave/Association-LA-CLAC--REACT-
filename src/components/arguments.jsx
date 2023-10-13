
import "../scss/components/arguments.scss";
export default function Arguments({argIndex}) {
  return (
    <div>
        <div key={argIndex} className="arg-content">
          <div className="arg-icon" >
          <img className="icon" src={argIndex.icon} alt={argIndex.title} />
          </div>
          <p className="arg-title">{argIndex.title}</p>
          <p className="arg-about">{argIndex.about}</p>
        </div>
    </div>
  );
}

