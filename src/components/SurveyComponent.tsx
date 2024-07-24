'use client'

import "survey-core/survey.i18n";
import { CompleteEvent, Model, surveyLocalization } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.css';
import { json } from '../../data/survey_json';

surveyLocalization.defaultLocale = "es";
  
export default function SurveyComponent(props: any) {
  const model = new Model(json);
  model.onComplete.add((survey, options) => {
    props.onComplete(survey.data);
  });
  return (
    <section>
      <div className="mb-5">
        <p><span className="text-green-500">Instrucciones:</span> Utilice la escala indicada para señalar cómo se aplica cada afirmación 
          a su equipo. Es importante evaluar honestamente las afirmaciones y no pensar demasido las respuestas.
        </p>
      </div>
      <div>
        <Survey model={model}/>
      </div>
    </section>    
  );
}