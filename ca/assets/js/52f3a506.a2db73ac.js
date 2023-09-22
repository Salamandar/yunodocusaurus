"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[5438],{3905:(t,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>m});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var u=n.createContext({}),c=function(t){var e=n.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},l=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},h="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),h=c(o),p=r,m=h["".concat(u,".").concat(p)]||h[p]||d[p]||i;return o?n.createElement(m,a(a({ref:e},l),{},{components:o})):n.createElement(m,a({ref:e},l))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[h]="string"==typeof t?t:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},72442:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={title:"Propel a contribution with GitHub",template:"docs",taxonomy:{category:"docs"},routes:{default:"/doc_use_git"}},a=void 0,s={unversionedId:"contribute/write_documentation/doc_use_git",id:"contribute/write_documentation/doc_use_git",title:"Propel a contribution with GitHub",description:"It is of course possible to contribute directly to the YunoHost documentation, but this is not the most convenient way to do so for both the contributor and the person who will inject your contribution into the documentation. Here is a tutorial to understand and create a contribution to the YunoHost documentation using Git and github.com which is the Git forge service that hosts and stores the YunoHost source code and documentation.",source:"@site/docs/06.contribute/05.write_documentation/03.doc_use_git.md",sourceDirName:"06.contribute/05.write_documentation",slug:"/contribute/write_documentation/doc_use_git",permalink:"/yunodocusaurus/ca/docs/contribute/write_documentation/doc_use_git",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/05.write_documentation/03.doc_use_git.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Propel a contribution with GitHub",template:"docs",taxonomy:{category:"docs"},routes:{default:"/doc_use_git"}},sidebar:"tutorialSidebar",previous:{title:"Guide Markdown",permalink:"/yunodocusaurus/ca/docs/contribute/write_documentation/doc_markdown_guide"},next:{title:"Introduction to packaging",permalink:"/yunodocusaurus/ca/docs/contribute/packaging_apps/"}},u={},c=[{value:"Create an account on github.com",id:"create-an-account-on-githubcom",level:2},{value:"Fork the YunoHost documentation in your personal repository",id:"fork-the-yunohost-documentation-in-your-personal-repository",level:2},{value:"Modify and add your contribution",id:"modify-and-add-your-contribution",level:2},{value:"Send your contribution by a Pull Request",id:"send-your-contribution-by-a-pull-request",level:2},{value:"Track your contribution and take into account feedback from contributors",id:"track-your-contribution-and-take-into-account-feedback-from-contributors",level:2},{value:"Bringing up mistakes and wishes through issues",id:"bringing-up-mistakes-and-wishes-through-issues",level:2},{value:"Going further with Git and working on his workstation",id:"going-further-with-git-and-working-on-his-workstation",level:2},{value:"Some resources elsewhere on the net to go further",id:"some-resources-elsewhere-on-the-net-to-go-further",level:2}],l={toc:c},h="wrapper";function d(t){let{components:e,...o}=t;return(0,r.kt)(h,(0,n.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is of course possible to contribute directly to the YunoHost documentation, but this is not the most convenient way to do so for both the contributor and the person who will inject your contribution into the documentation. Here is a tutorial to understand and create a contribution to the YunoHost documentation using ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," and ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/"},"github.com")," which is the Git forge service that hosts and stores the YunoHost source code and documentation."),(0,r.kt)("h2",{id:"create-an-account-on-githubcom"},"Create an account on github.com"),(0,r.kt)("p",null,"To be able to send your contributions via GitHub, you need to have an account on GitHub, to create the account you will need a valid email address that you have access to. GitHub is a powerful tool with many features, the interface can be a little scary at first.\nYou don't have to give your first and last names, you can use a nickname (when you register ",(0,r.kt)("inlineCode",{parentName:"p"},"Username"),")."),(0,r.kt)("h2",{id:"fork-the-yunohost-documentation-in-your-personal-repository"},"Fork the YunoHost documentation in your personal repository"),(0,r.kt)("p",null,"To fork the source code allows you to create a new branch of development of a software source code or in this case the source code of the documentation. By creating a new branch, this allows you to modify the code and add your contributions without altering the code of the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch, which is the public release of the documentation. This allows you not to have to write down everything at once, but to do it in several steps. (Especially for contributions that require more time)."),(0,r.kt)("p",null,"Forking a project on GitHub is extremely simple, just click on the Fork button, this will create a new repository on your GitHub account.\n",(0,r.kt)("img",{parentName:"p",src:"image://github_fork_button.png",alt:"Screenshot GitHub fork button screenshot"}),"\nIn the title of the new repository, you will see where the repository comes from, in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"YunoHost/doc"),".\n",(0,r.kt)("img",{parentName:"p",src:"image://github_fork_title.png",alt:"Screenshots title and subtitle of the repository"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Point of vigilance !"),"\nIf you forge the repository of another contributor than yunohost, you'll get the same files. Except that when you send your changes, they will be sent to the contributor and not to the yunohost repository. The advantage is that it allows you to develop another branch created by the contributor and work with another person on an improvement before submitting it to the main repository.\nIt is not possible to have a fork from a contributor's repository and the original repository fork at the same time in your own account.")),(0,r.kt)("h2",{id:"modify-and-add-your-contribution"},"Modify and add your contribution"),(0,r.kt)("p",null,"Once the repository is forked (copied), you will need to create a new development branch within your repository. It is through this branch that you will modify the files and thus propose improvements to the documentation. The fact that it is a new branch will allow you to make a Pull Request, i.e. a request to add your contributions to the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch, which is the main documentation branch. The development rules on GitHub change depending on the developers of each repository, some have a testing branch in which to offer contributions.\nMore information on what a branch on git-scm.com is: ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/fr/v1/Les-branches-avec-Git-Ce-qu-est-une-branche"},"Branching with Git - What a branch is"),"."),(0,r.kt)("h2",{id:"send-your-contribution-by-a-pull-request"},"Send your contribution by a Pull Request"),(0,r.kt)("p",null,"Create a Pull Request when you want to share your work with the other contributors and integrate it into the master repository (YunoHost's main repository). When publishing a Pull Request, commonly called PR, contributors will be able to amend, comment, add, correct your contribution before it is fully integrated into the repository."),(0,r.kt)("h2",{id:"track-your-contribution-and-take-into-account-feedback-from-contributors"},"Track your contribution and take into account feedback from contributors"),(0,r.kt)("p",null,"When you've already create a Pull Request (PR), changes to your development branch in the Git repository will automatically be added to the PR. This doesn't require any additional action. You can also include proposed changes from contributors, who, when they audit the code, may find errors or new, better wording."),(0,r.kt)("h2",{id:"bringing-up-mistakes-and-wishes-through-issues"},"Bringing up mistakes and wishes through issues"),(0,r.kt)("p",null,"YunoHost has a specific Git repository to collect issues: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/issues"},"github.com/YunoHost/issues"),"\nAn issue, also called a ticket, is an identified problem or a development wish; in this case for documentation, but it is valid for any software repository. Within the framework of the YunoHost documentation it will be mainly proposed issues for the development of the documentation, the identified problems being easily correctable."),(0,r.kt)("h2",{id:"going-further-with-git-and-working-on-his-workstation"},"Going further with Git and working on his workstation"),(0,r.kt)("p",null,"Using the power of Git to work on your personal computer means you don't have to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," each time you save modified documentation pages. It also allows you to use tools and software that make it easier to distinguish between tags used in a documentation page."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Online resource: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/fr-fr/contribute/get-started-setup-local"},"docs.microsoft.com - Setting up a Git repository locally for documentation"))),(0,r.kt)("h2",{id:"some-resources-elsewhere-on-the-net-to-go-further"},"Some resources elsewhere on the net to go further"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://openclassrooms.com/fr/courses/2342361-gerez-votre-code-avec-git-et-github"},"Managing your code with Git and GitHub - openclassrooms.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/download/gui/linux"},"Git User Interface - git-scm.com"))))}d.isMDXComponent=!0}}]);