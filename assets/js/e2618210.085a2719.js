"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[680],{8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),o=n(7294),a=n(2389),s=n(9443);var i=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(9521),u=n(6010),d="tabItem_1uMI";function c(e){var t,n,r,a=e.lazy,s=e.block,c=e.defaultValue,p=e.values,m=e.groupId,T=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),b=k.tabGroupChoices,g=k.setTabGroupChoices,x=(0,o.useState)(y),D=x[0],R=x[1],w=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=b[m];null!=E&&E!==D&&f.some((function(e){return e.value===E}))&&R(E)}var j=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;r!==D&&(N(t),R(r),null!=m&&g(m,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.currentTarget)+1;n=w[r]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.currentTarget)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},T)},f.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":D===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:j,onClick:j},null!=n?n:t)}))),a?(0,o.cloneElement)(h.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function p(e){var t=(0,a.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}},5216:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return T}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=n(6396),i=n(8215),l=["components"],u={id:"tutorial-02",title:"Tutorial with createContainer - ToDo App with useReducer",sidebar_label:"ToDo App (useReducer)"},d=void 0,c={unversionedId:"tutorial-02",id:"tutorial-02",isDocsHomePage:!1,title:"Tutorial with createContainer - ToDo App with useReducer",description:"This tutorial shows example code with useReducer.",source:"@site/docs/tutorial-02.md",sourceDirName:".",slug:"/tutorial-02",permalink:"/docs/tutorial-02",tags:[],version:"current",frontMatter:{id:"tutorial-02",title:"Tutorial with createContainer - ToDo App with useReducer",sidebar_label:"ToDo App (useReducer)"},sidebar:"docs",previous:{title:"Person Name (useState)",permalink:"/docs/tutorial-01"},next:{title:"ToDo App (useState+Immer)",permalink:"/docs/tutorial-03"}},p=[{value:"src/App.js",id:"srcappjs",children:[],level:2},{value:"src/store.js",id:"srcstorejs",children:[],level:2},{value:"src/TodoList.js",id:"srctodolistjs",children:[],level:2},{value:"src/TodoItem.js",id:"srctodoitemjs",children:[],level:2},{value:"src/NewTodo.js",id:"srcnewtodojs",children:[],level:2},{value:"src/utils.js",id:"srcutilsjs",children:[],level:2},{value:"CodeSandbox",id:"codesandbox",children:[],level:2}],m={toc:p};function T(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial shows example code with useReducer."),(0,a.kt)("h2",{id:"srcappjs"},"src/App.js"),(0,a.kt)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,a.kt)(i.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nimport { Provider } from './store';\nimport TodoList from './TodoList';\n\nconst App = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n"))),(0,a.kt)(i.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\n\nimport { Provider } from './store';\nimport TodoList from './TodoList';\n\nconst App: React.FC = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n")))),(0,a.kt)("p",null,"This is the root component.\nIt wraps TodoList with Provider."),(0,a.kt)("h2",{id:"srcstorejs"},"src/store.js"),(0,a.kt)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,a.kt)(i.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useReducer } from 'react';\nimport { createContainer } from 'react-tracked';\n\nconst initialState = {\n  todos: [\n    { id: 1, title: 'Wash dishes' },\n    { id: 2, title: 'Study JS' },\n    { id: 3, title: 'Buy ticket' },\n  ],\n  query: '',\n};\n\nlet nextId = 4;\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return {\n        ...state,\n        todos: [...state.todos, { id: nextId++, title: action.title }],\n      };\n    case 'DELETE_TODO':\n      return {\n        ...state,\n        todos: state.todos.filter((todo) => todo.id !== action.id),\n      };\n    case 'TOGGLE_TODO':\n      return {\n        ...state,\n        todos: state.todos.map((todo) =>\n          todo.id === action.id\n            ? { ...todo, completed: !todo.completed }\n            : todo,\n        ),\n      };\n    case 'SET_QUERY':\n      return {\n        ...state,\n        query: action.query,\n      };\n    default:\n      return state;\n  }\n};\n\nconst useValue = () => useReducer(reducer, initialState);\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useDispatch,\n} = createContainer(useValue);\n\n"))),(0,a.kt)(i.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useReducer } from 'react';\nimport { createContainer } from 'react-tracked';\n\nexport type TodoType = {\n  id: number;\n  title: string;\n  completed?: boolean;\n};\n\ntype State = {\n  todos: TodoType[];\n  query: string;\n};\n\ntype Action =\n  | { type: 'ADD_TODO'; title: string }\n  | { type: 'DELETE_TODO'; id: number }\n  | { type: 'TOGGLE_TODO'; id: number }\n  | { type: 'SET_QUERY'; query: string };\n\nconst initialState: State = {\n  todos: [\n    { id: 1, title: 'Wash dishes' },\n    { id: 2, title: 'Study JS' },\n    { id: 3, title: 'Buy ticket' },\n  ],\n  query: '',\n};\n\nlet nextId = 4;\n\nconst reducer = (state: State, action: Action): State => {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return {\n        ...state,\n        todos: [...state.todos, { id: nextId++, title: action.title }],\n      };\n    case 'DELETE_TODO':\n      return {\n        ...state,\n        todos: state.todos.filter((todo) => todo.id !== action.id),\n      };\n    case 'TOGGLE_TODO':\n      return {\n        ...state,\n        todos: state.todos.map((todo) =>\n          todo.id === action.id\n            ? { ...todo, completed: !todo.completed }\n            : todo,\n        ),\n      };\n    case 'SET_QUERY':\n      return {\n        ...state,\n        query: action.query,\n      };\n    default:\n      return state;\n  }\n};\n\nconst useValue = () => useReducer(reducer, initialState);\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useDispatch,\n} = createContainer(useValue);\n\n")))),(0,a.kt)("p",null,"The store is created by useReducer.\nuseUpdate is renamed to useDispatch for exporting."),(0,a.kt)("h2",{id:"srctodolistjs"},"src/TodoList.js"),(0,a.kt)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,a.kt)(i.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList = () => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const setQuery = (event) => {\n    dispatch({ type: 'SET_QUERY', query: event.target.value });\n  };\n  return (\n    <div>\n      <ul>\n        {state.todos.map(({ id, title, completed }) => (\n          <TodoItem key={id} id={id} title={title} completed={completed} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={state.query} onChange={setQuery} />\n      </div>\n    </div>\n  );\n};\n\nexport default TodoList;\n\n"))),(0,a.kt)(i.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList: React.FC = () => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const setQuery = (event: React.ChangeEvent<HTMLInputElement>) => {\n    dispatch({ type: 'SET_QUERY', query: event.target.value });\n  };\n  return (\n    <div>\n      <ul>\n        {state.todos.map(({ id, title, completed }) => (\n          <TodoItem key={id} id={id} title={title} completed={completed} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={state.query} onChange={setQuery} />\n      </div>\n    </div>\n  );\n};\n\nexport default TodoList;\n\n")))),(0,a.kt)("p",null,"This component is to show the list of ",(0,a.kt)("inlineCode",{parentName:"p"},"TodoItem"),"s,\n",(0,a.kt)("inlineCode",{parentName:"p"},"NewTodo")," to create a new item, and\na text field for highlight query.\nThis query is only effective against incomplete items."),(0,a.kt)("h2",{id:"srctodoitemjs"},"src/TodoItem.js"),(0,a.kt)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,a.kt)(i.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\nimport { useFlasher } from './utils';\n\nconst renderHighlight = (title, query) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\nconst TodoItem = ({ id, title, completed }) => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const delTodo = () => {\n    dispatch({ type: 'DELETE_TODO', id });\n  };\n  return (\n    <li ref={useFlasher()}>\n      <input\n        type=\"checkbox\"\n        checked={!!completed}\n        onChange={() => dispatch({ type: 'TOGGLE_TODO', id })}\n      />\n      <span\n        style={{\n          textDecoration: completed ? 'line-through' : 'none',\n        }}\n      >\n        {completed ? title : renderHighlight(title, state.query)}\n      </span>\n      <button onClick={delTodo}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n"))),(0,a.kt)(i.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\n\nimport { useDispatch, useTrackedState, TodoType } from './store';\nimport { useFlasher } from './utils';\n\nconst renderHighlight = (title: string, query: string) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\ntype Props = TodoType;\n\nconst TodoItem: React.FC<Props> = ({ id, title, completed }) => {\n  const dispatch = useDispatch();\n  const state = useTrackedState();\n  const delTodo = () => {\n    dispatch({ type: 'DELETE_TODO', id });\n  };\n  return (\n    <li ref={useFlasher()}>\n      <input\n        type=\"checkbox\"\n        checked={!!completed}\n        onChange={() => dispatch({ type: 'TOGGLE_TODO', id })}\n      />\n      <span\n        style={{\n          textDecoration: completed ? 'line-through' : 'none',\n        }}\n      >\n        {completed ? title : renderHighlight(title, state.query)}\n      </span>\n      <button onClick={delTodo}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n")))),(0,a.kt)("p",null,"This is the TodoItem component.\nWe prefer primitive props for memoized components."),(0,a.kt)("p",null,"If you want to use object props for memoized components,\nyou need to use a special ",(0,a.kt)("a",{parentName:"p",href:"./api#memo"},"memo")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo"),".\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dai-shi/react-tracked/tree/main/examples/09_reactmemo"},"example/09")," for the usage."),(0,a.kt)("h2",{id:"srcnewtodojs"},"src/NewTodo.js"),(0,a.kt)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,a.kt)(i.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useState } from 'react';\n\nimport { useDispatch } from './store';\nimport { useFlasher } from './utils';\n\nconst NewTodo = () => {\n  const dispatch = useDispatch();\n  const [text, setText] = useState('');\n  const addTodo = () => {\n    dispatch({ type: 'ADD_TODO', title: text });\n    setText('');\n  };\n  return (\n    <li ref={useFlasher()}>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={(e) => setText(e.target.value)}\n      />\n      <button onClick={addTodo}>Add</button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n"))),(0,a.kt)(i.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import React, { useState } from 'react';\n\nimport { useDispatch } from './store';\nimport { useFlasher } from './utils';\n\nconst NewTodo: React.FC = () => {\n  const dispatch = useDispatch();\n  const [text, setText] = useState('');\n  const addTodo = () => {\n    dispatch({ type: 'ADD_TODO', title: text });\n    setText('');\n  };\n  return (\n    <li ref={useFlasher()}>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={(e) => setText(e.target.value)}\n      />\n      <button onClick={addTodo}>Add</button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n")))),(0,a.kt)("p",null,"This is the NewTodo component to create a new item.\nIt uses a local state for the text field."),(0,a.kt)("h2",{id:"srcutilsjs"},"src/utils.js"),(0,a.kt)(s.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},(0,a.kt)(i.Z,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n"))),(0,a.kt)(i.Z,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef<HTMLLIElement>(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n")))),(0,a.kt)("p",null,"This is a utility function to show which components render."),(0,a.kt)("h2",{id:"codesandbox"},"CodeSandbox"),(0,a.kt)("p",null,"You can try ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/reverent-tree-geptx"},"working example"),"."))}T.isMDXComponent=!0}}]);