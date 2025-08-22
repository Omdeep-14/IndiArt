/* Quiz.jsx ------------------------------------------------------------ */
import React, { useState } from "react";
import { ArrowLeft, Check, X } from "lucide-react";

/* ------------ Question bank ------------ */
const QUIZ_BANK = {
  karnataka: [
    {
      q: "Which city is famous for Mysore painting?",
      options: ["Hubli", "Belgaum", "Mysuru", "Mangalore"],
      answer: 2,
    },
    {
      q: "Which wood is traditionally carved in Karnataka handicrafts?",
      options: ["Teak", "Sandalwood", "Rosewood", "Bamboo"],
      answer: 1,
    },
    {
      q: "Which dance-form originated in Karnataka?",
      options: ["Yakshagana", "Kathakali", "Bharatanatyam", "Garba"],
      answer: 0,
    },
    {
      q: "Karnataka’s capital is",
      options: ["Bengaluru", "Hyderabad", "Chennai", "Panaji"],
      answer: 0,
    },
    {
      q: "Famous textile hub in northern Karnataka?",
      options: ["Ilkal", "Varanasi", "Surat", "Kanchipuram"],
      answer: 0,
    },
  ],
  maharashtra: [
    {
      q: "Warli paintings traditionally use which colour background?",
      options: ["Black", "Red ochre", "White", "Indigo"],
      answer: 1,
    },
    {
      q: "Capital city of Maharashtra:",
      options: ["Nagpur", "Pune", "Mumbai", "Nashik"],
      answer: 2,
    },
    {
      q: "Ajanta caves are famous for",
      options: [
        "Miniature paintings",
        "Frescoes",
        "Oil paintings",
        "Madhubani",
      ],
      answer: 1,
    },
    {
      q: "Paithani sarees are woven with",
      options: ["Cotton", "Silk & Zari", "Jute", "Linen"],
      answer: 1,
    },
    {
      q: "Ganesh Chaturthi festival was popularised by",
      options: [
        "Mahatma Gandhi",
        "Bal Gangadhar Tilak",
        "Chhatrapati Shivaji",
        "Lokmanya Shastri",
      ],
      answer: 1,
    },
  ],
  bihar: [
    {
      q: "Madhubani art originates from which region?",
      options: ["Mithila", "Magadh", "Anga", "Bhojpur"],
      answer: 0,
    },
    {
      q: "Traditional folk theatre of Bihar is called",
      options: ["Bhavai", "Jatra", "Bidesia", "Yakshagana"],
      answer: 2,
    },
    {
      q: "The ancient university located in Bihar was",
      options: ["Nalanda", "Takshashila", "Vikramshila", "None"],
      answer: 0,
    },
    {
      q: "Bihar’s capital city:",
      options: ["Patna", "Ranchi", "Gaya", "Muzaffarpur"],
      answer: 0,
    },
    {
      q: "Famous lacquerware town in Bihar:",
      options: ["Muzaffarpur", "Hajipur", "Madhubani", "Tirhut"],
      answer: 2,
    },
  ],
};

/* ------------ Component ------------ */
export default function Quiz() {
  const [phase, setPhase] = useState("select"); // 'select' | 'play' | 'result'
  const [stateId, setStateId] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShow] = useState(false);

  /* helpers */
  const startQuiz = (id) => {
    setStateId(id);
    setPhase("play");
    setQIndex(0);
    setScore(0);
    setSelected(null);
    setShow(false);
  };

  const currentQ = stateId ? QUIZ_BANK[stateId][qIndex] : null;

  const handleOption = (idx) => {
    if (showAnswer) return; // prevent double click
    setSelected(idx);
    setShow(true);
    if (idx === currentQ.answer) setScore((s) => s + 1);
    // move to next question after 900 ms
    setTimeout(() => {
      if (qIndex + 1 < QUIZ_BANK[stateId].length) {
        setQIndex((q) => q + 1);
        setSelected(null);
        setShow(false);
      } else {
        setPhase("result");
      }
    }, 900);
  };

  const reset = () => {
    setPhase("select");
    setStateId(null);
  };

  /* ------------ UI ------------ */
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      {/* state-select screen */}
      {phase === "select" && (
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-2xl font-bold text-center mb-4">
            Choose a State Quiz
          </h1>
          <button
            onClick={() => startQuiz("karnataka")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium"
          >
            Karnataka
          </button>
          <button
            onClick={() => startQuiz("maharashtra")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium"
          >
            Maharashtra
          </button>
          <button
            onClick={() => startQuiz("bihar")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium"
          >
            Bihar
          </button>
        </div>
      )}

      {/* quiz-play screen */}
      {phase === "play" && currentQ && (
        <div className="w-full max-w-xl bg-white rounded-2xl border shadow p-8">
          <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
            <button
              onClick={reset}
              className="flex items-center hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> change state
            </button>
            <span>
              Question {qIndex + 1}/{QUIZ_BANK[stateId].length}
            </span>
          </div>

          <h2 className="text-lg font-semibold mb-6">{currentQ.q}</h2>

          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const isCorrect = showAnswer && idx === currentQ.answer;
              const isWrong =
                showAnswer && idx === selected && idx !== currentQ.answer;

              return (
                <button
                  key={idx}
                  disabled={showAnswer}
                  onClick={() => handleOption(idx)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition
                    ${isCorrect ? "bg-emerald-50 border-emerald-400" : ""}
                    ${isWrong ? "bg-red-50 border-red-400" : ""}
                    ${!showAnswer ? "hover:bg-gray-50" : ""}`}
                >
                  {opt}
                  {isCorrect && (
                    <Check className="inline w-4 h-4 text-emerald-600 ml-2" />
                  )}
                  {isWrong && (
                    <X className="inline w-4 h-4 text-red-600 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          <p className="text-right text-sm text-gray-500 mt-6">
            Current score: {score}
          </p>
        </div>
      )}

      {/* result screen */}
      {phase === "result" && (
        <div className="w-full max-w-md bg-white rounded-2xl border shadow p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-lg mb-6">
            You scored <span className="font-semibold">{score}</span> /
            {QUIZ_BANK[stateId].length}
          </p>
          <button
            onClick={reset}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
