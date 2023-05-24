function Add() {
    return (
        <div>
            <input className='todo__text' type="text" placeholder="Lägg til todos här!">

            </input>

            <input className='todo__name' type="text" placeholder="Användarnamn">

            </input>

            <button className="todo__button">Publicera</button>

        </div>
    )
}

export default Add