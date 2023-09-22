"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[7461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={title:"Minchat",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_minchat"}},r=void 0,s={unversionedId:"applications/docs/app_minchat",id:"applications/docs/app_minchat",title:"Minchat",description:"Installer Minchat with YunoHost Integration level",source:"@site/docs/04.applications/10.docs/app_minchat.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_minchat",permalink:"/yunodocusaurus/docs/applications/docs/app_minchat",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_minchat.md",tags:[],version:"current",frontMatter:{title:"Minchat",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_minchat"}},sidebar:"tutorialSidebar",previous:{title:"Metabase",permalink:"/yunodocusaurus/docs/applications/docs/app_metabase"},next:{title:"Mindmaps",permalink:"/yunodocusaurus/docs/applications/docs/app_mindmaps"}},l={},p=[{value:"Screenshots",id:"screenshots",level:3},{value:"Disclaimers / important information",id:"disclaimers--important-information",level:3},{value:"Setup",id:"setup",level:4},{value:"Hints for users",id:"hints-for-users",level:4},{value:"Useful links",id:"useful-links",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=minchat"},(0,i.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Installer Minchat with YunoHost"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://dash.yunohost.org/appci/app/minchat"},(0,i.kt)("img",{parentName:"a",src:"https://dash.yunohost.org/integration/minchat.svg",alt:"Integration level"}))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Minchat")," is a free minimalist chat application. It is based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wojtek77/chat"},"wojtek77/chat"),", itself based on ",(0,i.kt)("a",{parentName:"p",href:"http://code.tutsplus.com/tutorials/how-to-create-a-simple-web-based-chat-application--net-5931"},"Gabriel Nava's tutorial"),"."),(0,i.kt)("h3",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/YunoHost-Apps/minchat_ynh/blob/master/doc/screenshots/minchat_ynh_screenshot01.gif",alt:"Screenshot of Minchat"})),(0,i.kt)("h3",{id:"disclaimers--important-information"},"Disclaimers / important information"),(0,i.kt)("h4",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The setup is optional. If you leave it as is, there is a single unnamed room, opened to all users. If you want to customize the access control, edit the file ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/setup.ini")," (if missing, copy it from ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/sample/setup.ini"),"). The interesting parameter is ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," that indicates which user is authorized to which room."),(0,i.kt)("p",null,"In this example ",(0,i.kt)("inlineCode",{parentName:"p"},"auth = John:Game,John:Family,Mary:Game,Tim:Family,admin:*,*:Public,*:"),","),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"John:Game,John:Family")," = John can access the Game room, the Family room "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mary:Game")," = Mary can access the Game room "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tim:Family")," = Tim can access the Family room "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"admin:*")," = admin can access all rooms"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*:Public")," = everybody can acccess the Public room"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*:")," = everybody  can access the unnamed room")),(0,i.kt)("h4",{id:"hints-for-users"},"Hints for users"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The URLs you send are linked or transformed to images when preceeded by a ",(0,i.kt)("inlineCode",{parentName:"li"},"!")),(0,i.kt)("li",{parentName:"ul"},"If multiple rooms are allowed by the administrator in the ",(0,i.kt)("inlineCode",{parentName:"li"},"setup.ini"),", you can have several tabs opened to different rooms in the same browser.")),(0,i.kt)("h2",{id:"useful-links"},"Useful links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Website: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wojtek77/chat"},"github.com/wojtek77/chat")),(0,i.kt)("li",{parentName:"ul"},"Application software repository: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/minchat_ynh"},"github.com - YunoHost-Apps/minchat")),(0,i.kt)("li",{parentName:"ul"},"Fix a bug or an improvement by creating a ticket (issue): ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/minchat_ynh/issues"},"github.com - YunoHost-Apps/minchat/issues"))))}u.isMDXComponent=!0}}]);