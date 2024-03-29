const FormPage = () => {
    return (
        <div>
            <h1>Car store form</h1>
            <form>
                <label htmlFor="car-name">Car name:</label>
                <input type="text" name="name" id="car-name"></input>
                <label>Car Brand:</label>
                <input type="text" name="brand" id="car-brand"/>
                <label>Car category:</label>
                <select name="category" id="car-category">
                    <option value="Sedan">Sedan</option>
                    <option value="Hatch">Hatch</option>
                    <option value="SUV">SUV</option>
                    <option value="Sport">Sport</option>
                </select>
                <label>Price:</label>
                <input type="number" name="price" id="car-price"/>
                <label>Car photo:</label>
                <input type="file" name="photo" id="car-photo"/>
            </form>
        </div>
    );
}

export default FormPage;