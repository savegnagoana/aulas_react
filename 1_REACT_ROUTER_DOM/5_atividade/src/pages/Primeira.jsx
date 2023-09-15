import { Link } from "react-router-dom"

function Primeira() {
  return (
    <div>
        <h1> Omaga eu amo tanto ele </h1>
        <p>Mas mas... quem é ele?: ps: vá para "Ele quem?"</p>
        <Link to="/segunda"> Ir para Ele quem?</Link>
    </div>
  )
}

export default Primeira