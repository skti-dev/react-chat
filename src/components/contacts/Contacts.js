import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  return (
    <section className="h-screen w-1/6 border-r border-sm-gray-100">
      <div className="main-title">
        <h1 className="main-title-text">
          <FontAwesomeIcon className="mr-2" icon={faGlobeAmericas} />
          Smart<span className="text-red-500">Channel</span>
        </h1>
      </div>
    </section>
  )
}

export default Contacts;