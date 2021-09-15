import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

function Chat() {
  return (
    <section className="h-screen w-2/6 border-r border-sm-gray-100">
      <div className="default-title">
        <h1 className="default-title-text"> 
          <FontAwesomeIcon className="mr-2" icon={faComments} />
          Chat 
        </h1>
      </div>
    </section>
  )
}

export default Chat;