import { Idatastate } from "../FormPage"

interface IpropsInterface {
    children: Idatastate;
  }

const Car: React.FC<IpropsInterface> = ({children}) => {

    return (
        <div>
            <p>Name: {children.name}</p>
            <p>Brand: {children.brand}</p>
            <p>Category: {children.category}</p>
            <p>price: {children.price}</p>
            <p>Photo: {children.photo}</p>
        </div>
    );
}

export default Car;