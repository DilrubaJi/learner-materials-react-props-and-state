const Form = (handleSubmit) => {
    return (
        <div>
            <h2>Add your own animal!</h2>
            <form>
                <label>Name:
                <input type='text' name/>
                </label>
                <label>Species:</label>
                <input type='text' />
                <label>Favourite Food(s):</label>
                <input type='text' />
                <label >Birth Year:</label>
                <input type='text' />
                <input type='submit' value='Submit' onClick={handleSubmit}/>
            </form>

        </div>
    )

}

export default Form;