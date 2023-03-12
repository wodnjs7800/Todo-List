const quotes = [
    {
      quote: "내가 목표에 달성한 비밀을 말해줄게. 나의 강점은 바로 끈기야.",
      author: "루이 파스퇴르",
    },
    {
      quote: "멈추지 말고 한 가지 목표에 매진하라. 그것이 성공의 비결이다.",
      author: "안나 파블로바",
    },
    {
      quote:
        "나약한 태도는 성격도 나약하게 만든다.",
      author: "알버트 아인슈타인",
    },
    {
      quote: "신은 우리가 성공할 것을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.",
      author: "마더 테레사",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = `"${todaysQuote.quote}"`;
  author.innerText = `- ${todaysQuote.author} -`;