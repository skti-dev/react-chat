import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

function MkFramework() {
  return (
    <section className="mk-framework h-screen w-3/6">
      <div className="bg-gray-200 p-2">
        <h1 className="font-medium"> 
          <FontAwesomeIcon className="mr-2" icon={faInfo} />
          MkFramework 
        </h1>
      </div>
    </section>
  )
}

export default MkFramework;