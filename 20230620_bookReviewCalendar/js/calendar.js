// 이번달
// 현재날짜, 시각 객체 만들자
var now = new Date();
// 현재 년
var year = now.getFullYear();
// 현재 월
var month = now.getMonth() + 1;
// 현재 일
var date = now.getDate();

const datesContainerDiv = document.querySelectorAll(".dates.container")[0];
const setCalendar = (year, month) => {
    // 제목달 보여주자
    // html -> js
    const titleMonthDiv = document.getElementsByClassName("month")[0];
    // .innerHTML = `${month}월`;
    titleMonthDiv.innerHTML = `${month}월`;

    //달력 만들자
    //해당 월의 1일이 무슨 요일
    var firstDateDay = new Date(year, month - 1, 1).getDay();
    //해당 월의 마지막 날짜가 며칠?: 다음달의 1일 하루 전날(0일)
    var lastDate = new Date(year, month - 1 + 1, 0).getDate();

    // 원래 있던 달력에 .date.item clear
    datesContainerDiv.replaceChildren();
    // .innerHTML = `${month}월`;
    titleMonthDiv.innerHTML = `${year}년 ${month}월`;
    //.date.item{$}*lastDate
    //for 1~lastDate
    for (let date = 1; date <= lastDate; date++) {
        //<div class="date item">date</div>
        let dateItemDiv = document.createElement("div");    //<div></div>
        dateItemDiv.classList.add("date");      //<div class="date"></div>
        dateItemDiv.classList.add("item");      //<div class="date item"></div>
        dateItemDiv.innerHTML = date;           //<div class="date item">날짜</div>
        //HTML에 .dates.container 자식으로 넣자
        datesContainerDiv.appendChild(dateItemDiv);
    }

    //1일을 firstDateDay로 옮기자   5 -> 6
    //.dates.container의 자식 중 첫째자식(1일) style grid-column-start: day+1
    let firstDateDiv = datesContainerDiv.firstElementChild;
    //CSS { grid-column-start: firstDateDay + 1;}
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;
}
setCalendar(year, month);
// 이전달
// html => js
const LeftDiv = document.getElementsByClassName("left")[0];
LeftDiv.onclick = () => {
    month--;
    if(month == 0){
        year--;
        month = 12;
    }
    // let thisMonthDateObject = new date(year, month - 1);
    // year = thisMonthDateObject.getFullYear();
    // month = thisMonthDateObject.getMonth() + 1;
    setCalendar(year, month);
}     // 나중에 시험

const rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month--;
    if(month == 12) {
        year++;
        month + 1;
    }
}








// <: 이전달
// >: 이후달