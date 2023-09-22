"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[4265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Write documentation",template:"docs",taxonomy:{category:"docs"},routes:{default:"/write_documentation"}},r=void 0,l={unversionedId:"contribute/write_documentation/write_documentation",id:"contribute/write_documentation/write_documentation",title:"Write documentation",description:"Via GitHub",source:"@site/docs/06.contribute/05.write_documentation/05.write_documentation.md",sourceDirName:"06.contribute/05.write_documentation",slug:"/contribute/write_documentation/",permalink:"/yunodocusaurus/ca/docs/contribute/write_documentation/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/05.write_documentation/05.write_documentation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Write documentation",template:"docs",taxonomy:{category:"docs"},routes:{default:"/write_documentation"}},sidebar:"tutorialSidebar",previous:{title:"Creating a CHATONS with YunoHost",permalink:"/yunodocusaurus/ca/docs/community/chatons"},next:{title:"Guide to writing application documentation",permalink:"/yunodocusaurus/ca/docs/contribute/write_documentation/doc_writing_guide"}},s={},p=[{value:"Via GitHub",id:"via-github",level:2},{value:"Grav",id:"grav",level:2},{value:"Grav header",id:"grav-header",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Special pages",id:"special-pages",level:2},{value:"Host your own testing documentation",id:"host-your-own-testing-documentation",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"via-github"},"Via GitHub"),(0,o.kt)("p",null,"The YunoHost documentation is managed through a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/doc"},"Git repository"),"."),(0,o.kt)("p",null,'If you are not familiar with GitHub, there is an "Edit" button at the top of each page that will redirect you to the GitHub online editor that will help you make change proposals (Pull Requests, PR).'),(0,o.kt)("p",null,"However, if you are on an editing spree, you should fork the repository. You can then make all the commits (changes) you want on your forked repository, and submit them all at once in the same pull requests. GitHub's etiquette would advise you to gather in the same PR all related commits."),(0,o.kt)("p",null,"Because the online editor doesn't support uploading files, using Git is the prefered way if you need to upload media (e.g. images)."),(0,o.kt)("h2",{id:"grav"},"Grav"),(0,o.kt)("p",null,"Under the hood, the documentation is served by the ",(0,o.kt)("a",{parentName:"p",href:"https://getgrav.org/?target=_blank"},"Grav CMS"),"."),(0,o.kt)("p",null,"The structure of the repository is described below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"+-- config\n   +-- site.yaml\n   +-- system.yaml\n   +-- themes\n       +-- yunohost-docs.yaml\n          # Some settings for the documentation theme\n+-- images\n   # Contains the images used in the documentation pages.\n+-- pages\n   # The directory containing the documentation pages.\n   # The pages hierarchy is reflected by the directory hierarchy.\n   +-- 00.home\n   +-- 01.administer\n   +-- 02.applications\n   +-- 03.community\n   +-- 04.contribute\n+-- themes\n    +-- learn4\n    +-- yunohost-docs\n       # Contains the theme's code, which extends Learn4 theme's code\n+-- .gitignore\n    # Contains the instructions to not send sensitive\n    # or useless files over to the Git repository\n+-- README.md\n")),(0,o.kt)("p",null,"!!!! To learn more about Grav's features, you can head over to its ",(0,o.kt)("a",{parentName:"p",href:"https://learn.getgrav.org?target=_blank"},"documentation"),". The remainder of this page will show you some specific instructions to contribute to YunoHost's documentation."),(0,o.kt)("h2",{id:"grav-header"},"Grav header"),(0,o.kt)("p",null,"Each page starts with a header that gives instructions to Grav on how to process them. Let us have a look into the header of this page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"---\ntitle: Write documentation\ntemplate: docs\ntaxonomy:\n    category: docs\nroutes:\n  default: '/write_documentation'\n---\n\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The header starts and ends with a line containing ",(0,o.kt)("inlineCode",{parentName:"li"},"---")),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"title")," key manages the first heading title of the page, its name in the navigation menu on the left, and its name in the browser tab"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"template")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"taxonomy")," keys should always be left as is. They instruct Grav to use the proper theme and order the pages properly."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"routes"),"' ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," key makes the page available by default on ",(0,o.kt)("inlineCode",{parentName:"li"},"https://yunohost.org/docs/write_documentation")," instead of needing to reaching it on ",(0,o.kt)("inlineCode",{parentName:"li"},"https://yunohost.org/docs/contribute/write_documentation"),", which is where it is stored in the directory hierarchy.")),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"You can use Markdown syntax, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/doc_markdown_guide"},"documentation")," for further information."),(0,o.kt)("p",null,"! Note that language codes are not to be included at the beginning of the links to other documentation pages: ",(0,o.kt)("inlineCode",{parentName:"p"},"/en"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/fr"),", etc. are superfluous."),(0,o.kt)("p",null,"To improve Markdown capabilities, additional plugins are installed in Grav. You can refer to their own documentation on GitHub to see how to use them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"anchors\nexternal_links\nflex-objects\nhighlight\nimage-captions\nmarkdown-notices\npresentation\npresentation-deckset\nshortcode-core\n")),(0,o.kt)("h2",{id:"special-pages"},"Special pages"),(0,o.kt)("p",null,"Some pages of the documentation are automatically or dynamically generated."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Page"),(0,o.kt)("th",{parentName:"tr",align:null},"Path"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Apps catalog"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/pages/02.applications/01.catalog/apps.md")),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieves and processes ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/YunoHost/apps/blob/master/apps.json?target=_blank"},"app.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Apps helpers"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pages/04.contribute/04.packaging_apps/11.helpers/packaging_apps_helpers.md")),(0,o.kt)("td",{parentName:"tr",align:null},"Generated by this ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/YunoHost/yunohost/blob/dev/doc/generate_helper_doc.py?target=_blank"},"script"),", from this ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/YunoHost/yunohost/blob/dev/doc/helper_doc_template.md?target=_blank"},"template"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Per-app documentation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pages/02.applications/02.docs/docs.md")),(0,o.kt)("td",{parentName:"tr",align:null},"Lists the subpages in the same directory which have ",(0,o.kt)("inlineCode",{parentName:"td"},"taxonomy.category: docs, apps")," in its header")))),(0,o.kt)("h2",{id:"host-your-own-testing-documentation"},"Host your own testing documentation"),(0,o.kt)("p",null,"! These instructions are yet to be fully tested. Please help us by reporting any issue you may have with them."),(0,o.kt)("ol",{start:0},(0,o.kt)("li",{parentName:"ol"},"Fork YunoHost documentation repository"),(0,o.kt)("li",{parentName:"ol"},"Install Grav's YunoHost package: ",(0,o.kt)("inlineCode",{parentName:"li"},"yunohost app install grav")),(0,o.kt)("li",{parentName:"ol"},"Install the following plugins through Grav's admin panel or CLI:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"anchors\nbreadcrumbs\nexternal_links\nfeed\nflex-objects\ngit-sync\nhighlight\nimage-captions\nlangswitcher\nmarkdown-notices\npresentation\npresentation-deckset\nshortcode-core\ntntsearch\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Set-up Git Sync plugin.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Choose GitHub and your credentials on GitHub"),(0,o.kt)("li",{parentName:"ol"},"Set the repo, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"https://github.com/username/doc")),(0,o.kt)("li",{parentName:"ol"},"Copy the Webhook's URL, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"https://grav.example/_git-sync-ca25c111f0de")),(0,o.kt)("li",{parentName:"ol"},"Basic settings > Folders to Sync: ",(0,o.kt)("inlineCode",{parentName:"li"},"pages")," ",(0,o.kt)("inlineCode",{parentName:"li"},"images")," ",(0,o.kt)("inlineCode",{parentName:"li"},"themes")),(0,o.kt)("li",{parentName:"ol"},"Git Repo Settings > User not required: Enabled"),(0,o.kt)("li",{parentName:"ol"},"Git Repo Settings > Web Hooks secret: Enabled"),(0,o.kt)("li",{parentName:"ol"},"Advanced settings > local branch: ",(0,o.kt)("inlineCode",{parentName:"li"},"master")),(0,o.kt)("li",{parentName:"ol"},"Advanced settings > remote branch: ",(0,o.kt)("inlineCode",{parentName:"li"},"master"),(0,o.kt)("br",{parentName:"li"}),"(you can change ",(0,o.kt)("inlineCode",{parentName:"li"},"master")," if you want to work on another branch, but do not forget to create it on GitHub first)"),(0,o.kt)("li",{parentName:"ol"},"Advanced settings > Committer Name: your GitHub username"))),(0,o.kt)("li",{parentName:"ol"},"Advanced settings > Committer Email: your email saved on GitHub"),(0,o.kt)("li",{parentName:"ol"},"Save and Reset Local Copy"),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"commits")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tree")," keys in ",(0,o.kt)("inlineCode",{parentName:"li"},"config/themes/yunohost-docs.yaml")," to point to your fork's repository"),(0,o.kt)("li",{parentName:"ol"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"li"},"user/pages/01.home")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"user/pages/02.typography")," directories are deleted."),(0,o.kt)("li",{parentName:"ol"},"Configuration > System:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Language > Supported: ",(0,o.kt)("inlineCode",{parentName:"li"},"en")," ",(0,o.kt)("inlineCode",{parentName:"li"},"fr")," ",(0,o.kt)("inlineCode",{parentName:"li"},"de")," ",(0,o.kt)("inlineCode",{parentName:"li"},"es")," ",(0,o.kt)("inlineCode",{parentName:"li"},"ar")),(0,o.kt)("li",{parentName:"ol"},"Language > Override Default Language: ",(0,o.kt)("inlineCode",{parentName:"li"},"en")),(0,o.kt)("li",{parentName:"ol"},"Language > Set language from browser: ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes")),(0,o.kt)("li",{parentName:"ol"},"HTTP Headers > Etag: ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes")),(0,o.kt)("li",{parentName:"ol"},"Advanced > Blueprint Compatibility: ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes")),(0,o.kt)("li",{parentName:"ol"},"Advanced > YAML Compatibility: ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes")),(0,o.kt)("li",{parentName:"ol"},"Advanced > Twig Compatibility: ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes"))))))}m.isMDXComponent=!0}}]);