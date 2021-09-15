import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

function Chat() {
  return (
    <section className="chat h-screen w-2/6 border-r border-gray-300">
      <div className="bg-gray-200 p-2">
        <h1 className="font-medium"> 
          <FontAwesomeIcon className="mr-2" icon={faComments} />
          Chat 
        </h1>
      </div>
    </section>
  )
}

export default Chat;