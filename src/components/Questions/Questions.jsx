import { useEffect, useState } from "react";
import { questions, results } from "../../utils/questions";

export default function Questions({ setIsModalOpen ,setShowSearchResult , answers , setAnswers , setIsShowData}) {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [isChoosed , setIsChoosed] = useState("Todos");


  function handleNextQuestion() {
    if (questionIdx == questions.length - 1) {
      setIsModalOpen(false);
      setShowSearchResult(false);
      setIsShowData(true);
      window.scrollTo({top:1000})
      return;
    }
    setQuestionIdx((prevState) => prevState + 1);
    setIsChoosed("Todos")
  }

  function handlePrevQuestion() {
   if(questionIdx == 0) {
    return;
   }
   setQuestionIdx(prevState => prevState - 1)
  }

  return (
    <div className="flex flex-col justify-center h-auto px-20 py-2 mx-auto my-2 align-middle">
      <p className="font-medium text-center text-gray-500">
        Question {questionIdx + 1} of {questions.length}
      </p>
      <h2 className="text-2xl font-bold text-center text-black">
        {questions[questionIdx].question_name}
      </h2>

      <div className="flex flex-wrap justify-center gap-2 align-middle">
        {questions[questionIdx].question_options.map((option) => {
          return (
            <>
            <button className={`${(isChoosed == option || isChoosed == option.opt_title) && "bg-yellow-500"} rounded-lg px-10 py-3 bg-gray-300 text-gray-600`} onClick={() => {
              setAnswers((prevAnswers) => ({
                ...prevAnswers,
                objE: {
                  ...prevAnswers.objE,
                  [questions[questionIdx].type] : questions[questionIdx].isImg ? option.opt_title : option,
                },
              }))
              setIsChoosed(questions[questionIdx].isImg ? option.opt_title : option)
            }}>{questions[questionIdx].isImg ? <img loading="lazy" className="object-cover w-[60px] h-14" src={option.opt_img} alt={option.opt_title}/> : option}</button>
            </>
          );
        })}
      </div>

     <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
     <button
        onClick={handlePrevQuestion}
        className="px-8 py-2 mx-auto my-4 text-white bg-yellow-500 rounded-xl w-fit"
      >
        Prev
      </button>

     <button
        onClick={handleNextQuestion}
        className="bg-[#0d563a] py-2 my-4 mx-auto px-8 rounded-xl text-white w-fit"
      >
        Continue
      </button>
     </div>
    </div>
  );
}
