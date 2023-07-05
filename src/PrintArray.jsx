import "./quiz.css";
function PrintArray() {
  const questions = [
    {
      question: "2+2",
      answer: 4,
      options: [2, 3, 4, 5],
    },
    {
      question: "3+2",
      answer: 4,
      options: [2, 3, 4, 5],
    },
    {
      question: "4+2",
      answer: 4,
      options: [2, 3, 4, 5],
    },
    {
      question: "5+2",
      answer: 4,
      options: [2, 3, 4, 5],
    },
  ];
  //   {
  //     for (let i = 0; i < questions.length; i++) {
  //       const selection = questions.map((x) => questions[i].question);
  //       const answers = questions.map((x) => questions[i].answer);
  //       const optionss = questions.map((x) => questions[i].options);
  //       console.log(selection);
  //     }

  return (
    <div className="questions">
      {questions.map((q) => {
        return (
          <div>
            <h2>{q.question}</h2>
            {q.options.map((op) => {
              return <p>{op}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default PrintArray;
