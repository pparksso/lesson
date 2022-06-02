// console.log(new Date().getDay());

const day = new Date().getDay();
switch (day) {
  case "0":
    console.log("Sun");
    break;
  case "1":
    console.log("Mon");
    break;
  case "2":
    console.log("Tue");
    break;
  case "3":
    console.log("Wed");
    break;
  case "4":
    console.log("thu");
    break;
  case "5":
    console.log("Fri");
    break;
  case "6":
    console.log("Sat");
    break;
  default:
    console.log("날짜를 잘못 입력하셨습니다.");
    break;
}
