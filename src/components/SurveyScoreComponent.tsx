export default function SurveyComponent(props: any) {
  return (
    <section>
      <div className="mb-5">
        <p><span className="text-green-500">Una puntuación de 8 ó 9</span> indica probablemente que la disfunción no es problema del equipo.</p>
        <p><span className="text-green-500">Una puntuación de 6 ó 7</span> indica que la disfunción puede ser un problema.</p>
        <p><span className="text-green-500">Una puntuación de 3 a 5</span> indica que probablemente hay que afrontar la disfunción.</p>
      </div>
      <div className="mb-5">
        <p>
          Independiente de la puntación, es importante tener presente que un equipo requiere constante
          trabajo, porque sin el incluso los mejores son presa de las disfunciones
        </p>
      </div>
      <div className="mb-5">
        <p>Ausencia de confianza: {props.result.absenceOfTrust}</p>
        <p>Temor al conflicto: {props.result.fearOfConflict}</p>
        <p>Falta de compromiso: {props.result.lackOfCommitment}</p>
        <p>Evitación de responsabilidades: {props.result.avoidanceOfAccountability}</p>
        <p>Falta de atención a los resultados: {props.result.inattention}</p>
      </div>
    </section>
  )
}