"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[1069],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const l={title:"Guide Markdown",template:"docs",taxonomy:{category:"docs"},routes:{default:"/doc_markdown_guide"}},r=void 0,o={unversionedId:"contribute/write_documentation/doc_markdown_guide",id:"contribute/write_documentation/doc_markdown_guide",title:"Guide Markdown",description:"Markdown is a markup language created in 2004, many add-ons developing the possibilities of this language exist. The objective of this guide is to aim for the exhaustiveness of the possibilities of this formatting language within the framework of the YunoHost documentation and not Markdown languages in general.",source:"@site/docs/06.contribute/05.write_documentation/02.doc_markdown_guide.md",sourceDirName:"06.contribute/05.write_documentation",slug:"/contribute/write_documentation/doc_markdown_guide",permalink:"/yunodocusaurus/ru/docs/contribute/write_documentation/doc_markdown_guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/05.write_documentation/02.doc_markdown_guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Guide Markdown",template:"docs",taxonomy:{category:"docs"},routes:{default:"/doc_markdown_guide"}},sidebar:"tutorialSidebar",previous:{title:"Guide to writing application documentation",permalink:"/yunodocusaurus/ru/docs/contribute/write_documentation/doc_writing_guide"},next:{title:"Propel a contribution with GitHub",permalink:"/yunodocusaurus/ru/docs/contribute/write_documentation/doc_use_git"}},s={},d=[{value:"The different levels of titles",id:"the-different-levels-of-titles",level:2},{value:"Level 2 title",id:"level-2-title",level:2},{value:"Level 3 title",id:"level-3-title",level:3},{value:"Level 4 title",id:"level-4-title",level:4},{value:"Level 5 title",id:"level-5-title",level:5},{value:"Level 6 title",id:"level-6-title",level:6},{value:"Formatting in paragraphs",id:"formatting-in-paragraphs",level:2},{value:"Create links",id:"create-links",level:2},{value:"Create anchors",id:"create-anchors",level:3},{value:"Displaying images",id:"displaying-images",level:2},{value:"Format a quote",id:"format-a-quote",level:2},{value:"Lists",id:"lists",level:2},{value:"Ordered lists",id:"ordered-lists",level:3},{value:'Unordered lists<a name="anchorname"></a>',id:"unordered-lists",level:3},{value:"Tables",id:"tables",level:2},{value:"Code block",id:"code-block",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"Going further",id:"going-further",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Markdown is a markup language created in 2004, many add-ons developing the possibilities of this language exist. The objective of this guide is to aim for the exhaustiveness of the possibilities of this formatting language within the framework of the YunoHost documentation and not Markdown languages in general."),(0,i.kt)("p",null,"Markdown allows text to be formatted using tags, it allows ",(0,i.kt)("em",{parentName:"p"},"human")," reading of the text; even with formatting. Even if only one notepad is needed there are many markdowns software (Markdown on ",(0,i.kt)("a",{parentName:"p",href:"https://framalibre.org/recherche-par-crit-res?keys=markdown"},"framalibre.org (fr)"),"). It is relatively easy to use."),(0,i.kt)("h2",{id:"the-different-levels-of-titles"},"The different levels of titles"),(0,i.kt)("p",null,"By writing titles as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"# Level 1 title\n## Level 2 title\n### Level 3 title\n#### Level 4 title\n##### Level 5 title\n###### Level 6 title\n")),(0,i.kt)("p",null,"They appear like this:"),(0,i.kt)("h1",{id:"level-1-title"},"Level 1 title"),(0,i.kt)("h2",{id:"level-2-title"},"Level 2 title"),(0,i.kt)("h3",{id:"level-3-title"},"Level 3 title"),(0,i.kt)("h4",{id:"level-4-title"},"Level 4 title"),(0,i.kt)("h5",{id:"level-5-title"},"Level 5 title"),(0,i.kt)("h6",{id:"level-6-title"},"Level 6 title"),(0,i.kt)("h2",{id:"formatting-in-paragraphs"},"Formatting in paragraphs"),(0,i.kt)("p",null,"To type a line break without creating a new paragraph, it is necessary to type ",(0,i.kt)("strong",{parentName:"p"},"two consecutive spaces"),". Otherwise, the text will continue in a row respecting the general constraints of the page style."),(0,i.kt)("p",null,"By writing this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"For text in *italic you have to frame it with an asterisk* `*`\nTo write **bold text by two asterisks** `**`\nYou can also ~~bar the text~~ by framing it with two tildes `~`\n")),(0,i.kt)("p",null,"It reads like this:"),(0,i.kt)("p",null,"For text in ",(0,i.kt)("em",{parentName:"p"},"italic you have to frame it with an asterisk")," ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),"\nTo write ",(0,i.kt)("strong",{parentName:"p"},"bold text by two asterisks")," ",(0,i.kt)("inlineCode",{parentName:"p"},"**"),"\nYou can also ",(0,i.kt)("del",{parentName:"p"},"bar the text")," by framing it with two tildes ",(0,i.kt)("inlineCode",{parentName:"p"},"~")),(0,i.kt)("h2",{id:"create-links"},"Create links"),(0,i.kt)("p",null,"To create a link to a site outside of the YunoHost documentation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"[Text to display](https://lelien.tld)\n")),(0,i.kt)("p",null,"will be displayed as such:\n",(0,i.kt)("a",{parentName:"p",href:"https://lelien.tld"},"Text to display")),(0,i.kt)("p",null,"It is the same for the documentation pages, except that the link is internal. The page name is its default route, as defined in its page header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"[Wiki Page](/write_documentation)\n")),(0,i.kt)("p",null,"The link will return to the page with the correct language setting if the page exists, or defaults to the next available language (French, usually):\n",(0,i.kt)("a",{parentName:"p",href:"/write_documentation"},"Wiki page")),(0,i.kt)("p",null,"! Note that language codes are thus not to be included at the beginning of the links to other documentation pages: ",(0,i.kt)("inlineCode",{parentName:"p"},"/en"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/fr"),", etc. are superfluous."),(0,i.kt)("h3",{id:"create-anchors"},"Create anchors"),(0,i.kt)("p",null,"An anchor allows you to make a link to a specific point in a page, that's how the indexes at the top of the page work. To create an anchor, you need to insert code at the anchor location in the following form :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"Text that will be doesn't even know it has an anchor.\n")),(0,i.kt)("p",null,"What's displayed is:\nText that will be doesn't even know it has an anchor."),(0,i.kt)("p",null,"It is also possible to return an anchor directly to the title, noting the link in lower case with ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),"s instead of spaces.\nAll that remains is to designate the anchor to the text you want to make interactive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"[My Anchor Returns to Lists](#anchorname)\n[My Anchor that refers to the title of the tables](#tables)\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#anchorame"},"My Anchor Returns to Lists"),"\n",(0,i.kt)("a",{parentName:"p",href:"#tables"},"My Anchor that refers to the title of the tables")),(0,i.kt)("h2",{id:"displaying-images"},"Displaying images"),(0,i.kt)("p",null,"To display images, the principle is the same as for links, except that a ",(0,i.kt)("inlineCode",{parentName:"p"},"!")," is added before the text to be displayed, which is considered here as the text to be displayed if the image cannot be loaded. A description of the image is appropriate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"![YunoHost Logo](image://logo.png)\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"image://logo.png",alt:"YunoHost Logo"})),(0,i.kt)("p",null,"It is possible to make a link with an image, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"[![YunoHost Logo](image://logo.png)](/write_documentation)\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/write_documentation"},(0,i.kt)("img",{parentName:"a",src:"image://logo.png",alt:"YunoHost Logo"}))),(0,i.kt)("p",null,"The insert of ",(0,i.kt)("em",{parentName:"p"},"text to be displayed if the image cannot be loaded")," between the brackets in the image link is not mandatory but strongly recommended."),(0,i.kt)("h2",{id:"format-a-quote"},"Format a quote"),(0,i.kt)("p",null,"Quotes are used to highlight a statement made by another person, the wiki itself manages the way it is highlighted. Markdown uses a closing chevron, this symbol: ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", to announce a quote. Just add it before the quote, as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},">First level quotation text\n>which can be formatted in different lines\n\n>> And a second quote\n>> with double rafters\n")),(0,i.kt)("p",null,"Will be displayed:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"First level quotation text\nwhich can be formatted in different lines")),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},"And a second quote\nwith double rafters"))),(0,i.kt)("h2",{id:"lists"},"Lists"),(0,i.kt)("p",null,"Lists allow to display a series of texts in an easy presentation, this is how indexes such as the ",(0,i.kt)("a",{parentName:"p",href:"/contributordoc"},"contributing documentation")," page are written."),(0,i.kt)("h3",{id:"ordered-lists"},"Ordered lists"),(0,i.kt)("p",null,"The ordered lists can be incremented as much as you wish, it is not necessary to give the right match to the number. It is possible to write down with ",(0,i.kt)("inlineCode",{parentName:"p"},"1.")," and put in three spaces to mark the increment. For a better understanding of the plain text, it may be fine to use the numbers in ascending order to mark the increment, but it is the three consistent `spaces' before the sub-list that will mark the increment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"1. List 1\n1. List 2\n1. list 3\n   1. List 3a\n   1. List 3b\n      1. List 3b1\n      1. List 3b2\n      1. List 3b3\n         1. List 1\n         1. List 2\n         1. list 3\n1. List 4\n1. List 5\n1. list 6\n")),(0,i.kt)("p",null,"You get:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"List 1"),(0,i.kt)("li",{parentName:"ol"},"List 2"),(0,i.kt)("li",{parentName:"ol"},"list 3",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"List 3a"),(0,i.kt)("li",{parentName:"ol"},"List 3b",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"List 3b1"),(0,i.kt)("li",{parentName:"ol"},"List 3b2"),(0,i.kt)("li",{parentName:"ol"},"List 3b3",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"List 1"),(0,i.kt)("li",{parentName:"ol"},"List 2"),(0,i.kt)("li",{parentName:"ol"},"list 3"))))))),(0,i.kt)("li",{parentName:"ol"},"List 4"),(0,i.kt)("li",{parentName:"ol"},"List 5"),(0,i.kt)("li",{parentName:"ol"},"list 6")),(0,i.kt)("h3",{id:"unordered-lists"},"Unordered lists",(0,i.kt)("a",{name:"anchorname"})),(0,i.kt)("p",null,"To create an unordered list, use the symbols ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),". This will not change the appearance of the marker in the text output. It is the incrementing of the list that will define the visual. For a better reading of the plain text, it may be good to use the different symbols to mark the increment, but it is the three spaces before the sub-list that will indicate the increment.\nAs such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"+ List 1\n+ List 2\n+ list 3\n   - List 3a\n   - List 3b\n      * List 3b1\n      * List 3b2\n      * List 3b3\n         + List 1\n         + List 2\n         + list 3\n- List 4\n* List 5\n+ list 6\n")),(0,i.kt)("p",null,"This will read:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"List 1"),(0,i.kt)("li",{parentName:"ul"},"List 2"),(0,i.kt)("li",{parentName:"ul"},"list 3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"List 3a"),(0,i.kt)("li",{parentName:"ul"},"List 3b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"List 3b1"),(0,i.kt)("li",{parentName:"ul"},"List 3b2"),(0,i.kt)("li",{parentName:"ul"},"List 3b3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"List 1"),(0,i.kt)("li",{parentName:"ul"},"List 2"),(0,i.kt)("li",{parentName:"ul"},"list 3")))))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"List 4")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"List 5")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"list 6")),(0,i.kt)("h2",{id:"tables"},"Tables"),(0,i.kt)("p",null,"To create an array, use the vertical bar ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," and dashes ",(0,i.kt)("inlineCode",{parentName:"p"},"--"),". It is mandatory to add a line of dashes under the first line of the table. There is no constraint in the size of the table. It is possible to format the array with the ",(0,i.kt)("inlineCode",{parentName:"p"},":")," in the second row of the array, three options are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Left aligned column"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Centered column"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Right aligned column"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},":-----")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},":----:")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"-----:"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"| **One table** | One column | One second | As many as you want |\n|:-------------:|:----------:|:----------:|:-------------------:|\n| | And formatted line | | And bold text | | Or *italic* |\n| More lines | |![An image](image://cd.jpg) | [Or a link](/contributordoc) |\n")),(0,i.kt)("p",null,"Which would say this:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"One table")),(0,i.kt)("th",{parentName:"tr",align:"center"},"One column"),(0,i.kt)("th",{parentName:"tr",align:"center"},"One second"),(0,i.kt)("th",{parentName:"tr",align:"center"},"As many as you want"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"And formatted line"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"And bold text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"More lines"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{parentName:"td",src:"image://cd.jpg",alt:"An image"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"/contributordoc"},"Or a link"))))),(0,i.kt)("h2",{id:"code-block"},"Code block"),(0,i.kt)("p",null,"To display plain text, ",(0,i.kt)("inlineCode",{parentName:"p"},"blocks of code' can be created using the grave accent "),"Alt Gr + \xe8` :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"Either inline, for example to highlight a key like `Ctrl`.\n")),(0,i.kt)("p",null,"or directly as a block.\nThe only difference is in the amount of bass accents:\nAt least three low pitched accents at the opening and closing of the block and two low pitched accents that frame the piece of text to be formatted in a line."),(0,i.kt)("p",null,"Which will give the rendering:"),(0,i.kt)("p",null,"Either inline, for example to highlight a key like ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl"),".\n","'","'","'"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"or directly as a block.\nThe only difference is in the amount of bass accents:\nAt least three low pitched accents at the opening and closing of the block and two low pitched accents that frame the piece of text to be formatted in a line.\n")),(0,i.kt)("p",null,"'","'","'"),(0,i.kt)("h2",{id:"useful-links"},"Useful links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The documentation of the original Markdown language: ",(0,i.kt)("a",{parentName:"li",href:"https://daringfireball.net/projects/markdown/"},"daringfireball.net/projects/markdown")),(0,i.kt)("li",{parentName:"ul"},"Markdown Tutorial on ",(0,i.kt)("a",{parentName:"li",href:"https://markdowntutorial.com"},"markdowntutorial.com"))),(0,i.kt)("h2",{id:"going-further"},"Going further"),(0,i.kt)("p",null,"In a more general way, to understand how a text is formatted just inspect the source document with a note application. This does not mean that the YunoHost wiki will be able to exploit it. There are many other possibilities to use markdown syntax, feel free to add missing features. If you've noticed some missing features and/or have questions, please contact us on ",(0,i.kt)("a",{parentName:"p",href:"https://forum.yunohost.org"},"the forum")," or by direct message on the IRC room: ",(0,i.kt)("strong",{parentName:"p"},"#yunohost")," on ",(0,i.kt)("a",{parentName:"p",href:"https://libera.chat"},"libera.chat"),"."))}c.isMDXComponent=!0}}]);