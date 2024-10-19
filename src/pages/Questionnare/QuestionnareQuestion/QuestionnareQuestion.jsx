import { useParams } from "react-router-dom"
import Questions from "../../../components/Questions/Questions";

export default function QuestionnareQuestion() {
    const {type} = useParams();
    console.log(type);
  return (
    <div className="my-10 w-[500px] px-4 py-3 mx-auto text-center flex flex-col justify-center align-middle">
       {type && <img src={`/${type}.jpg`} alt={`${type} image`} className="w-24 h-24 mx-auto text-center rounded-full"/>}
        <Questions/>
    </div>
  )
}
