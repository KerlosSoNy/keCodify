"use client";
import { useEffect, useState } from "react";
import {htmlInterview} from '../../constant/html'
import {cssinterview} from '../../constant/css'
import {jsInterview} from '../../constant/javascript'
import {reactinterview} from '../../constant/react'
import {nextinterview} from '../../constant/next'
import {reduxinterview} from '../../constant/redux'
import {nativeinterview} from '../../constant/native'
import {angularinterview} from '../../constant/angular'
import {flutterInterview} from '../../constant/flutter'
import Accordion from "../../../components/accordion";
const Category = ({ params }) => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    if(params === "html-collection"){
      setData(htmlInterview)
    }else if(params == "css"){
      setData(cssinterview)
    }else if(params == "javascript"){
      setData(jsInterview)
    }else if(params == "react"){
      setData(reactinterview)
    }else if(params == "next-js"){
      setData(nextinterview)
    }else if(params == "redux"){
      setData(reduxinterview)
    }else if(params == "react-native"){
      setData(nativeinterview)
    }else if(params == "angular"){
      setData(angularinterview)
    }else if(params == "flutter"){
      setData(flutterInterview)
    }
  },[params])
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-96 bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-center w-full h-full bg-no-repeat bg-cover bg-hero-pattern">
          <h1 className="text-4xl font-bold text-white uppercase">{params}</h1>
          <p className="text-xl font-medium text-white text-center container">
          Discover the perfect answers to interview questions and get everything you need, all in one place.
          </p>
        </div>
      </div>
      <div
        className="mx-auto w-11/12 px-2 py-8 sm:px-6 sm:py-12 lg:px-8 text-gray-500 text-sm"
        style={{ maxWidth: "90rem" }}
      >
        Home <span className="mx-2">/</span> {params}
      </div>
      <div className="w-full lg:w-11/12 mx-auto !text-start my-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-2">
        {
          data?.map((item, index) => (
              <Accordion number={index + 1} question={item.question} answer={item.answer} key={index}/>
          ))
        }
      </div>
    </>
  );
};

export default Category;
