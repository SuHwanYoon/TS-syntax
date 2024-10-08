type Pizza = {
    id: number
    name: string
    price: number
}


type Order ={
    id: number
    pizza: Pizza
    // status: string
    //객체의 속성을 특정 문자열로 제한
    status: "ordered" | "completed"
}
//기존 보유 현금
let cashInRegister: number = 100;
//초기값1이며 1씩 증가하는 오더 id
let nextOrderId: number = 1;
//초기값1이며 1씩 증가하는 피자 id
let nextPizzaId: number = 1;
// 주문한 피자 정보가 들어갈 배열
const orderQueue: Order[] = [];


//기존 메뉴 Array  이름, 가격
// menu 배열이 Pizza 배열 타입임을 지정
const menu : Pizza[] =[
    
    { id: nextPizzaId++, name: "Cheeze" , price: 8},
    { id: nextPizzaId++, name: "Pepperoni" , price: 10},
    { id: nextPizzaId++, name: "Hawaiian" , price: 10},
    { id: nextPizzaId++, name: "Meat" , price: 9},
    
]
console.log("기존메뉴:",menu)
console.log("새로운 메뉴3개를 추가")

// 메뉴배열에 새로운 피자 메뉴 추가하는 함수
// id속성이 생략된 피자 객체를 받고 id속성이 포함된 피자객제를 반환 
function addNewPizza(pizzaObj:Omit<Pizza, "id">) : Pizza{
    const newPizza : Pizza = {
        id : nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza);
    return newPizza; 
}

// 피자이름을 받아서 주문정보(id, 선택메뉴, 상태) 반환하는 함수
function placeOrder(pizzaName: string) : Order | undefined{
    // 주문피자이름과 일치하는 첫번째 메뉴 요소 찾기
    const selectedMenu = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    //menu배열에서 Pizza객체를 찾지 못했을 경우의 처리를 추가
    if (!selectedMenu) {
        console.error(`${selectedMenu}는 존재하지않습니다`)
        return;
    }
    // 기존 현금보유에서 주문피자가격을 누적
    cashInRegister += selectedMenu.price;
    //order순서, 피자메뉴, 주문상태 가 담긴 객체
    //TS는 변수 newOrder에 타입을 지정해 주지않는다면 'ordered'를 단지 string으로 판단한다
    // const newOrder = {id: nextOrderId++,pizza: selectedMenu , status: 'ordered'};
    //따라서 특정 문자열임을 식별하기 위해서 해당 객체 타입을 지정해준다
    const newOrder : Order = {id: nextOrderId++,pizza: selectedMenu , status: 'ordered'};
    // 주문 배열에 새로운 주문 정보 푸시
    orderQueue.push(newOrder)
    // 주문정보 반환
    return newOrder;
}

//파라미터가 배열과 객체(Pizza, Order)인 제네릭함수 
function addToArray<T>(array: T[], item: T) : T[]{
    array.push(item)
    return array
}

//인자가 객체배열, 객체(Pizza, Order)인 제네릭 함수 호출
addToArray(menu,{id: nextPizzaId++ , name: "goguma Pizza", price: 20})
//status 속성이 정의되지않은 속성임에도 오류를 감지하지 못하기때문에 <Order>로 명시적으로 표시를 해준다
addToArray<Order>(orderQueue,{id:nextOrderId++, pizza: menu[2], status: "completed"})

console.log(menu)
console.log(orderQueue)


// 오더 id를 받아 오더정보 반환
function completeOrder(orderId:number) : Order | undefined {
    // 주문한 오더id와 일치하는 첫번째 오더요소 찾기
    const orderInfo = orderQueue.find(order => order.id === orderId);
    //orderQueue배열에서 order객체를 못찾았을경우
    if (!orderInfo) {
        console.error(`${orderInfo}는 존재하지 않습니다`)
        return
    }
    orderInfo.status = "completed";
    // 오더정보반환
    return orderInfo;
}

//type narrowing를 위한 함수 argument가 문자열 혹은 숫자
//피자 객체 혹은 undefined를 반환
export function getPizzaDetails(identifier:string | number): Pizza | undefined {
    //identifier의 타입이 문자열이면
    if (typeof identifier === "string") {
        //메뉴 배열에서 argument와 일치하는 피자객체리턴 일치하는게 없으면 undifined 리턴 여기서 문자열 처리가 종료
        return menu.find(pizza => pizza.name.toLowerCase === identifier.toLowerCase)
    } else if(typeof identifier === "number"){
        //남은 숫자 타입을 처리
        return menu.find(pizza => pizza.id === identifier)
    }else{
        throw new TypeError("파라미터 `identifier`는 반드시 문자열이거나 숫자여야 합니다")
    }
}


// 메뉴배열에 새로운 피자메뉴 3개추가
addNewPizza({ name: "Chiken Bacon Ranch", price: 12});
addNewPizza({ name: "BBQ Chiken", price: 12});
addNewPizza({ name: "Spciy Sausage", price: 11});

// 치킨 베이컨 렌치 피자의 주문정보객체를 반환
placeOrder("Chiken Bacon Ranch");
// 1번 주문정보 반환
completeOrder(1);


// console.log("현재메뉴:", menu);
// console.log("현재잔액:", cashInRegister);
// console.log("주문 정보:", orderQueue);

