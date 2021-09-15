import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

function MkFramework() {
  return (
    <section className="h-screen w-3/6">
      <div className="default-title">
        <h1 className="default-title-text"> 
          <FontAwesomeIcon className="mr-2" icon={faInfo} />
          MkFramework 
        </h1>
      </div>
    </section>
  )
}

export default MkFramework;