'use client';
import React from 'react';
//import Image from "next/image";
import SurveyComponent from '../components/SurveyComponent';
import SurveyScoreComponent from '@/components/SurveyScoreComponent';


let absenceOfTrust: number;
let fearOfConflict: number;
let lackOfCommitment: number;
let avoidanceOfAccountability: number;
let inattention: number;

export default function Home() {
  const [showResult, setShowResult] = React.useState(false);
  const [result, setResult] = React.useState({});
  

  const onComplete = (datas: {[key: number]: number}) => {
    absenceOfTrust = datas['4'] + datas['6'] + datas['12'];
    fearOfConflict = datas['1'] + datas['7'] + datas['10'];
    lackOfCommitment = datas['3'] + datas['8'] + datas['13'];
    avoidanceOfAccountability = datas['2'] + datas['11'] + datas['14'];
    inattention = datas['5'] + datas['9'] + datas['15'];
    setResult({
      absenceOfTrust,
      fearOfConflict,
      lackOfCommitment,
      avoidanceOfAccountability,
      inattention
    })
    setShowResult(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        { !showResult && 
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <SurveyComponent onComplete={ onComplete }/>
        </div>
        }
        { showResult && 
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <SurveyScoreComponent result={ result } />
        </div>
        }
      
    </main>
  );
}
