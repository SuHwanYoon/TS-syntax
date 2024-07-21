//기존 메뉴 Array  이름, 가격
const menu =[
    
    { name: "Cheeze" , price: 8},
    { name: "Pepperoni" , price: 10},
    { name: "Hawaiian" , price: 10},
    { name: "Meat" , price: 9},
    
];
//기존 보유 현금
let cashInRegister = 100;
//초기값1이며 1씩 증가하는 오더 id
let nextOrderId = 1;
// 주문한 피자 정보가 들어갈 배열
const orderQueue = [];

// 메뉴배열에 새로운 피자 메뉴 추가하는 함수
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

// 피자이름을 받아서 주문정보(id, 선택메뉴, 상태) 반환하는 함수
function placeOrder(pizzaName) {
    // 주문피자이름과 일치하는 첫번째 메뉴 요소 찾기
    const selectedMenu = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    //selectedMenu가 정의되지않을 경우의 처리를 추가
    if (!selectedMenu) {
        console.error(`${selectedMenu}는 존재하지않습니다`)
        return;
    }
    // 기존 현금보유에서 주문피자가격을 누적
    cashInRegister += selectedMenu.price;
    //order순서, 피자메뉴, 주문상태 가 담긴 객체
    const newOrder = {id: nextOrderId++,pizza: selectedMenu , status: 'ordered'};
    // 주문 배열에 새로운 주문 정보 푸시
    orderQueue.push(newOrder)
    // 주문정보 반환
    return newOrder;
}

// 오더 id를 받아 오더정보 반환
function completeOrder(orderId:number) {
    // 주문한 오더id와 일치하는 첫번째 오더요소 찾기
    const orderInfo = orderQueue.find(order => order.id === orderId);
    //오더정보 상태
    orderInfo.status = "completed";
    // 오더정보반환
    return orderInfo;
}

// 메뉴배열에 새로운 피자메뉴 3개추가
addNewPizza({ name: "Chiken Bacon Ranch", cost: 12});
addNewPizza({ name: "BBQ Chiken", cost: 12});
addNewPizza({ name: "Spciy Sausage", cost: 11});

// 치킨 베이컨 렌치 피자의 주문정보를 반환
placeOrder("Chiken Bacon Ranch");
// 1번 주문정보 반환
completeOrder(1);


console.log("메뉴:", menu);
console.log("잔액:", cashInRegister);
console.log("주문 정보:", orderQueue);

