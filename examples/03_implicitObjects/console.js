const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};
console.time("전체 시간");
console.log("평범한 로그 쉼표로 구분 가능");
console.log(string, number, boolean);
console.error("에러 메시지");

console.table([
  { name: "zero", birth: 1994 },
  { name: "kenny", birth: 1992 },
]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("시간 측정");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간 측정");

const b = () => {
  console.trace("에러 위치 추적");
};
const a = () => {
  b();
};
a();

console.timeEnd("전체 시간");
