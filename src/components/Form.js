const Form = () => {
    return (
        <div>
            <h2>Add your own animal!</h2>
            <form>
                <label>Name:</label>
                <input type='text' />
                <label>Species:</label>
                <input type='text' />
                <label>Favourite Food(s):</label>
                <input type='text' />
                <label >Birth Year:</label>
                <input type='text' />
                <input type='submit' value='submit'/>
            </form>

        </div>
    )

}

export default Form;