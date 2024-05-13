import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25290b3a"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=25290b3a"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=25290b3a"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import Layout from "/src/Layout.jsx?t=1714834945608";
import "/src/index.css?t=1714834945608";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=25290b3a";
import { store } from "/src/components/TodoList/app/store.js";
import {
  Home,
  PasswordGenerator,
  TodoList,
  CurrencyConvertor,
  Calculator,
  ApiPage,
  Projects,
  Skill
} from "/src/components/index.js?t=1714834945608";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "/node_modules/.vite/deps/react-router-dom.js?v=25290b3a";
const router = createBrowserRouter(
  createRoutesFromElements(
    /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Layout, {}, void 0, false, {
      fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
      lineNumber: 26,
      columnNumber: 30
    }, this), children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 27,
        columnNumber: 32
      }, this) }, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/projects", element: /* @__PURE__ */ jsxDEV(Projects, {}, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 28,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/skill", element: /* @__PURE__ */ jsxDEV(Skill, {}, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 29,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/passwordgenerator", element: /* @__PURE__ */ jsxDEV(PasswordGenerator, {}, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 30,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/todolist", element: /* @__PURE__ */ jsxDEV(TodoList, {}, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 31,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/currencyconverter", element: /* @__PURE__ */ jsxDEV(CurrencyConvertor, {}, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 32,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/calculator", element: /* @__PURE__ */ jsxDEV(Calculator, {}, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 33,
        columnNumber: 42
      }, this) }, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/apipage", element: /* @__PURE__ */ jsxDEV(ApiPage, {}, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 34,
        columnNumber: 39
      }, this) }, void 0, false, {
        fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
      lineNumber: 26,
      columnNumber: 5
    }, this)
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/Users/amanw/Documents/React JS/My-5Projects/Single-Page-applications/src/main.jsx",
    lineNumber: 40,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBeUI2QjtBQXpCN0IsT0FBT0EsV0FBVztBQUNsQixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLFlBQVk7QUFDbkIsT0FBTztBQUNQLFNBQVNDLGdCQUFnQjtBQUN6QixTQUFTQyxhQUFhO0FBQ3RCO0FBQUEsRUFDRUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsT0FDSztBQUNQO0FBQUEsRUFDRUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsT0FDSztBQUVQLE1BQU1DLFNBQVNGO0FBQUFBLEVBQ2JDO0FBQUFBLElBQ0UsdUJBQUMsU0FBTSxNQUFLLEtBQUksU0FBUyx1QkFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTyxHQUM5QjtBQUFBLDZCQUFDLFNBQU0sTUFBSyxLQUFJLFNBQVMsdUJBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUssS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFrQztBQUFBLE1BQ2xDLHVCQUFDLFNBQU0sTUFBSyxhQUFZLFNBQVMsdUJBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVMsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE4QztBQUFBLE1BQzlDLHVCQUFDLFNBQU0sTUFBSyxVQUFTLFNBQVMsdUJBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQU0sS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF3QztBQUFBLE1BQ3hDLHVCQUFDLFNBQU0sTUFBSyxzQkFBcUIsU0FBUyx1QkFBQyx1QkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWtCLEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZ0U7QUFBQSxNQUNoRSx1QkFBQyxTQUFNLE1BQUssYUFBWSxTQUFTLHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFTLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBOEM7QUFBQSxNQUM5Qyx1QkFBQyxTQUFNLE1BQUssc0JBQXFCLFNBQVMsdUJBQUMsdUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFrQixLQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWdFO0FBQUEsTUFDaEUsdUJBQUMsU0FBTSxNQUFLLGVBQWMsU0FBUyx1QkFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVcsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFrRDtBQUFBLE1BQ2xELHVCQUFDLFNBQU0sTUFBSyxZQUFXLFNBQVMsdUJBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVEsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE0QztBQUFBLFNBUjlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FTQTtBQUFBLEVBQ0Y7QUFDRjtBQUVBZixTQUFTaUIsV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFDbkQsdUJBQUMsTUFBTSxZQUFOLEVBQ0MsaUNBQUMsWUFBUyxPQUNSLGlDQUFDLGtCQUFlLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBK0IsS0FEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlBO0FBQ0YiLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiTGF5b3V0IiwiUHJvdmlkZXIiLCJzdG9yZSIsIkhvbWUiLCJQYXNzd29yZEdlbmVyYXRvciIsIlRvZG9MaXN0IiwiQ3VycmVuY3lDb252ZXJ0b3IiLCJDYWxjdWxhdG9yIiwiQXBpUGFnZSIsIlByb2plY3RzIiwiU2tpbGwiLCJSb3V0ZSIsIlJvdXRlclByb3ZpZGVyIiwiY3JlYXRlQnJvd3NlclJvdXRlciIsImNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cyIsInJvdXRlciIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi9jb21wb25lbnRzL1RvZG9MaXN0L2FwcC9zdG9yZVwiO1xuaW1wb3J0IHtcbiAgSG9tZSxcbiAgUGFzc3dvcmRHZW5lcmF0b3IsXG4gIFRvZG9MaXN0LFxuICBDdXJyZW5jeUNvbnZlcnRvcixcbiAgQ2FsY3VsYXRvcixcbiAgQXBpUGFnZSxcbiAgUHJvamVjdHMsXG4gIFNraWxsLFxufSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBSb3V0ZSxcbiAgUm91dGVyUHJvdmlkZXIsXG4gIGNyZWF0ZUJyb3dzZXJSb3V0ZXIsXG4gIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cyxcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihcbiAgY3JlYXRlUm91dGVzRnJvbUVsZW1lbnRzKFxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQgLz59PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9wcm9qZWN0c1wiIGVsZW1lbnQ9ezxQcm9qZWN0cyAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3NraWxsXCIgZWxlbWVudD17PFNraWxsIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvcGFzc3dvcmRnZW5lcmF0b3JcIiBlbGVtZW50PXs8UGFzc3dvcmRHZW5lcmF0b3IgLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi90b2RvbGlzdFwiIGVsZW1lbnQ9ezxUb2RvTGlzdCAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2N1cnJlbmN5Y29udmVydGVyXCIgZWxlbWVudD17PEN1cnJlbmN5Q29udmVydG9yIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvY2FsY3VsYXRvclwiIGVsZW1lbnQ9ezxDYWxjdWxhdG9yIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvYXBpcGFnZVwiIGVsZW1lbnQ9ezxBcGlQYWdlIC8+fSAvPlxuICAgIDwvUm91dGU+XG4gIClcbik7XG5cblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iXSwiZmlsZSI6IkM6L1VzZXJzL2FtYW53L0RvY3VtZW50cy9SZWFjdCBKUy9NeS01UHJvamVjdHMvU2luZ2xlLVBhZ2UtYXBwbGljYXRpb25zL3NyYy9tYWluLmpzeCJ9