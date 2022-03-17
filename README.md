# d3_pr
https://wattenberger.com/blog/react-and-d3

day1
svg 에 ref 를 걸어주고 해당 ref를 d3.select에 걸어주면 svg 객체에 그림 그릴수 있다.!
해당 객체에 append('circle') 과 같이 원하는 모양 과 정보를 입려해서 구체적인 형태를 그릴수 있다.
명령적으로 사용할수 있고 jsx 문법을 이용해 선언적으로도 사용할수 있다.

d3 역할이 svg ref에 접근하고 조작을 도와주는 건가??

day2
scale(domain, range) 뭔말인지는 알겠는데 어떤 순간에 필요한건지는 잘모르겠네.
선억적으로 사용한다음에 명령적ㅇ로 이페특안에서 스타일 가공해서 보여줄수 있고
차트축은 만들었는데 margin 객체가 필요하긴 하네 계산이 안맞으니까