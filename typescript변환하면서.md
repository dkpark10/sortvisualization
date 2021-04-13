# 타입스크립트 변환하면서 느낀점

생각보다 까다롭다... 변환하면서 막혔던 모든점 정리 </br>

#### exports is not defined ~~

> exports is not defined ~~~

다음 오류는 말그대로 exports가 정의 되있지 않다는 것.
스택 오버플로우를 뒤진 결과 브라우저에서는 commonjs를 지원하지 않는다고 한다.

```javascript
// in tsconfig.json
"module" : "commonjs",
``` 

tsconfig에서 다음 옵션을 지워주면 되지만 되지도 않을 뿐더러 후에 서술할 export 라우팅 때문에
이 옵션을 지워선 안된다.

> <script> var exports = {}; </script>

스크립트 태그에서 js파일을 떙겨오기 전에 다음 구문을 넣는다. 하지만 직접 넣으면 또 오류
크롭에서 보안상 이유로 직접 스크립트 작성을 막아놓는다. 파일작성해서 땡겨오면 해결 

#### Router.use() requires a middleware function but got a Object

간단하게 말해서 moudle.export를 안해줘서 생긴문젠데 타입스크립트에선 외부로 모듈을 던질 때

> export = router

이렇게 작성한다. 위에 **"module" : "commonjs"** 옵션을 지우면 에러 뱉어냄
 

 #### session

 기본적으로 Request 객체에 세션이 없어서 직접 index.t.ts 파일로 들어가 뒤지면서 session 속성을 any로 생성해 주었다.