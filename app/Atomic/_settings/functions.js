import React from 'react';
import { Switch, Route } from 'react-router-dom';

// hàm này map các giá trị tương ứng với prop key của Component trả về
// https://material-ui.com/customization/components/#dynamic-css
// Like https://github.com/brunobertolini/styled-by
export const styledByProp = (property, mapping) => props =>
  mapping[props[property]]; // hạn chế sử dụng

export const createArray = (max = 10) => {
  const arr = [];
  for (let index = 0; index < max; index += 1) {
    arr[index] = index;
  }
  return arr;
};

/* https://reactrouter.com/web/example/route-config */
// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        // gắn các sub-routes xuống component để giữ sự kết nối
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

// doc: https://reactrouter.com/web/example/nesting
/* trả về nhanh Switch và Route */
export const renderSwitchRoute = routes => (
  <Switch>
    {routes.map((route, index) => {
      const key = index;
      return <RouteWithSubRoutes key={key} {...route} />;
    })}
  </Switch>
);
