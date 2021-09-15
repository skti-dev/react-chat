import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  return (
    <section className="contacts h-screen w-1/6 border-r border-gray-300">
      <div className="bg-black p-2">
        <h1 className="text-white font-medium">
          <FontAwesomeIcon className="mr-2" icon={faGlobeAmericas} />
          Smart<span className="text-red-500">Channel</span>
        </h1>
      </div>
    </section>
  )
}

export default Contacts;