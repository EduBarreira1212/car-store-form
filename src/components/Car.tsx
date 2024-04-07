import { Idatastate } from "../FormPage"

interface IpropsInterface extends Idatastate {
    children: React.ReactNode;
  }

const Car: React.FC<IpropsInterface> = ({children}) => {

    return (
        <div>
            
        </div>
    );
}

export default Car;