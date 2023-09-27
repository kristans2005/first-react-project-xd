import Stundas from './stundas.jsx'

function Diena(property) {

    return(
        <>
            <h1>Sodien ir {property.nosaukums}</h1>
            <ol>
                <Stundas stunda= {PirmdienasStundas[0]} />
                <Stundas stunda= {PirmdienasStundas[1]} />
                <Stundas stunda= {PirmdienasStundas[2]} />
                <Stundas stunda= {PirmdienasStundas[3]} />
            </ol>
        </>
    )
    
}

export default Diena

