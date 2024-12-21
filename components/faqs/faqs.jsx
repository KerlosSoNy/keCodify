import Accordion from "../accordion";
import { faqsQuestions }  from "../../app/constant/constant";

export default function Faqs() {
    return (
        <div className="flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-center  mt-10 mb-10">
                Why KeCodify?
            </span>
            <div className="grid divide-y divide-neutral-200 px-3 max-w-xl mx-auto mt-8">
                {
                    faqsQuestions.map((item , index) => <Accordion key={index} question={item.question} answer={item.answer}/>)
                }
	        </div>
        </div>
    );
}