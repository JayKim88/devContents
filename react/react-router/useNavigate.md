### 페이지 상태관리하는 방법

useNavigate 와 useLocation 을 함께 사용하여 페이지 상태를 관리할 수 있다.

```js
import { useNavigate, useLocation } from "react-router";

const navigate = useNavigate();
const location = useLocation();

const handlePageSizeChange = (pageSize: number) => {
  setCurrentPage(0);
  setCurrentPageSize(pageSize);
  navigate(location, {
    replace: true,
    state: { ...location.state, pageSize, page: 0 },
  });
};
```
navigate 메소드 안에서 to 를 location 으로 지정하고 state 에 이용하고자 하는 args 를 넣으면  
location 에 아래와 같이 해당하는 state 가 저장되어 이를 페이지 관리에 사용할 수 있다.  
```
console.log(location)

location {
  hash: ""
  key: "example"
  pathname: "/product-settings"
  search: ""
  state: {
      filterValues: {
          barcode: ""
          brandId:""
          ...
      }
      page: 0
      pageSize: 10
      tabId: 0
  }
}
```
만약 page 를 이탈하면(out of product-settings) 페이지 리프레쉬가 되어 state value 는 사라진다(empty).  
하지만 해당 페이지에서 리프레쉬할 경우에는 이 state 가 유지된다. 

참고: https://reach.tech/router/api/navigate
