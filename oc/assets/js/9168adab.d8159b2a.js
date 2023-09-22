"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[6211],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>y});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(o),d=n,y=c["".concat(p,".").concat(d)]||c[d]||h[d]||r;return o?a.createElement(y,i(i({ref:t},u),{},{components:o})):a.createElement(y,i({ref:t},u))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},62007:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=o(87462),n=(o(67294),o(3905));const r={title:"Use Git to package apps",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_apps_git"}},i=void 0,l={unversionedId:"contribute/packaging_apps/resources/packaging_apps_git",id:"contribute/packaging_apps/resources/packaging_apps_git",title:"Use Git to package apps",description:'Git... Our dear beloved Git, which can be described also as "Goddamn Idiotic Truckload of sh\\*t", according to Linus.',source:"@site/docs/06.contribute/10.packaging_apps/80.resources/03.packaging_apps_git.md",sourceDirName:"06.contribute/10.packaging_apps/80.resources",slug:"/contribute/packaging_apps/resources/packaging_apps_git",permalink:"/yunodocusaurus/oc/docs/contribute/packaging_apps/resources/packaging_apps_git",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/10.packaging_apps/80.resources/03.packaging_apps_git.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Use Git to package apps",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_apps_git"}},sidebar:"tutorialSidebar",previous:{title:"Packaging v2",permalink:"/yunodocusaurus/oc/docs/contribute/packaging_apps/advanced/notes_about_new_packaging_v2"},next:{title:"Create a development environment with VirtualBox",permalink:"/yunodocusaurus/oc/docs/contribute/packaging_apps/resources/packaging_apps_virtualbox"}},p={},s=[{value:"Working with GitHub",id:"working-with-github",level:2},{value:"Branches",id:"branches",level:4},{value:"Edit a file",id:"edit-a-file",level:4},{value:"Commit your changes",id:"commit-your-changes",level:4},{value:"To fork or not to fork",id:"to-fork-or-not-to-fork",level:4},{value:"Pull request",id:"pull-request",level:4},{value:"YunoHost-Apps organization",id:"yunohost-apps-organization",level:4},{value:"Working with Git locally",id:"working-with-git-locally",level:2},{value:"First case: Creating a new package",id:"first-case-creating-a-new-package",level:4},{value:"git clone",id:"git-clone",level:5},{value:"My brand new package, continued",id:"my-brand-new-package-continued",level:5},{value:"Second case: Working locally on a repository",id:"second-case-working-locally-on-a-repository",level:4},{value:"Branches",id:"branches-1",level:4},{value:"<code>git checkout</code>",id:"git-checkout",level:4},{value:"<code>git pull</code> before anything else",id:"git-pull-before-anything-else",level:4},{value:"Let&#39;s work",id:"lets-work",level:4},{value:"<code>git checkout -b</code>",id:"git-checkout--b",level:4},{value:"<code>git commit</code>",id:"git-commit",level:4},{value:"Push to the distant repository",id:"push-to-the-distant-repository",level:4}],u={toc:s},c="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Git... Our dear beloved Git, which can be described also as "Goddamn Idiotic Truckload of sh',"*",'t", according to Linus.',(0,n.kt)("br",{parentName:"p"}),"\n","Be sure if you don't know Git yet that you will soon agree with that description."),(0,n.kt)("p",null,"YunoHost and all our apps are on the Git forge GitHub. Which means that if you want to work on an app, sooner or later you're going to have to deal with Git.",(0,n.kt)("br",{parentName:"p"}),"\n","So let's see how to work with Git to be able to contribute in the context of YunoHost."),(0,n.kt)("h2",{id:"working-with-github"},"Working with GitHub"),(0,n.kt)("p",null,'Let\'s go first for the easy part, GitHub comes with an "easy" web interface to deal with.'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"First things first, unfortunately there's no way around, you need an account on GitHub.")),(0,n.kt)("h4",{id:"branches"},"Branches"),(0,n.kt)("p",null,"Then, probably one of the most important thing, ",(0,n.kt)("strong",{parentName:"p"},"do not work directly on the master branch"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Sorry, it has to be said !"),(0,n.kt)("p",null,'Branches are, as GitHub explains, "',(0,n.kt)("em",{parentName:"p"},'a parallel version of a repository. It is contained within the repository, but does not affect the other branches. Allowing you to work freely without disrupting the "live" version.'),'"'),(0,n.kt)("p",null,"The master branch is the branch that contains the version of the app users will actually install and use.",(0,n.kt)("br",{parentName:"p"}),"\n","The usual thing to do is to work from the testing branch, and when everything is settled and tested, you can merge the testing branch in master, so users will enjoy the new release of your package."),(0,n.kt)("p",null,"To see and change the current branch, use this button:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"image://github_branch.png",alt:null})),(0,n.kt)("h4",{id:"edit-a-file"},"Edit a file"),(0,n.kt)("p",null,"Now that you're on the right branch, let's see how to edit a file on GitHub."),(0,n.kt)("p",null,"You can edit any file by using the small pencil icon:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"image://github_edit.png",alt:null})),(0,n.kt)("p",null,"If you don't have the permission to write on the repository, you will see (as on the picture) that you're going to create a fork (we'll see below what a fork is).",(0,n.kt)("br",{parentName:"p"}),"\n","If you have the permission to write, you will just edit the file, without forking."),(0,n.kt)("h4",{id:"commit-your-changes"},"Commit your changes"),(0,n.kt)("p",null,"When you're done with your modification on the file, you can commit your changes.",(0,n.kt)("br",{parentName:"p"}),"\n","Behind that word, the idea is quite simple, you're just going to save your changes...",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"image://github_commit.png",alt:null})),(0,n.kt)("p",null,"The first field is the name of your commit, a very short sentence to explain why you did this modification.",(0,n.kt)("br",{parentName:"p"}),"\n","The second field is a large one for a more complete explanation, if you need it."),(0,n.kt)("p",null,"Finally, if you're editing a repository on which you have permission to write, you can either commit directly to the current branch or create a new branch.",(0,n.kt)("br",{parentName:"p"}),"\n","It's usually better to create a new branch, that way you keep your modifications on a ",(0,n.kt)("em",{parentName:"p"},"parallel")," version of the repository. Your modifications will be discussed in a pull request (explained below) then finally merged into the original branch."),(0,n.kt)("h4",{id:"to-fork-or-not-to-fork"},"To fork or not to fork"),(0,n.kt)("p",null,"A fork is a copy of a repository into your own account.",(0,n.kt)("br",{parentName:"p"}),"\n","We have seen before that if you don't have permission to write into a repository, editing a file will automatically create a fork.",(0,n.kt)("br",{parentName:"p"}),"\n","Because the fork is on your account, you always have the permission to write on it.",(0,n.kt)("br",{parentName:"p"}),"\n","But even if a fork is not the real repository, but just a copy, a fork is always linked to its parent. We'll see later that to create a fork is really useful when opening a pull request."),(0,n.kt)("p",null,"When you create a new package, it's common to use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/example_ynh"},"example app")," as a base.",(0,n.kt)("br",{parentName:"p"}),"\n","But, because you don't want to keep that link to the example app, you should not fork the example app. You will rather clone the app.",(0,n.kt)("br",{parentName:"p"}),"\n","Unfortunately, to clone an app is a little bit trickier on GitHub. We will see later how to clone to a local repository instead."),(0,n.kt)("p",null,"We have seen how to edit a file, and how this could fork the app.",(0,n.kt)("br",{parentName:"p"}),"\n","But, when you want to edit multiple files, the GitHub interface isn't really the best way. In such situation, you would rather clone the repository and work on a local repository.",(0,n.kt)("br",{parentName:"p"}),"\n","You may still need to fork on your own account to be able to save your modifications if you don't have the permission on the distant repository."),(0,n.kt)("h4",{id:"pull-request"},"Pull request"),(0,n.kt)("p",null,"After you have committed your changes, whether on a branch or a fork, you want to propose your modifications to be integrated into the main repository, or the original branch.",(0,n.kt)("br",{parentName:"p"}),"\n","To do so, you're going to ",(0,n.kt)("em",{parentName:"p"},"create a pull request"),". GitHub usually ask you directly if you want to do so.",(0,n.kt)("br",{parentName:"p"}),"\n","Otherwise, you'll find the button to create a pull request just here:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"image://github_pull_request.png",alt:null})),(0,n.kt)("p",null,"When creating a pull request from a fork, to ease the work of the reviewers, ",(0,n.kt)("strong",{parentName:"p"},"do never")," uncheck the checkbox ",(0,n.kt)("em",{parentName:"p"},"Allow edits from maintainers"),". That option simply allow the maintainers of the original repository to edit directly your work."),(0,n.kt)("h4",{id:"yunohost-apps-organization"},"YunoHost-Apps organization"),(0,n.kt)("p",null,"Following the ",(0,n.kt)("a",{parentName:"p",href:"/packaging_apps_intro"},"guide for packaging application within YunoHost"),", your app has to be into the YunoHost-Apps organization, but if you have never contributed to an app before or never had any app into this organization you may not have the permission."),(0,n.kt)("p",null,"First, you need the permission to write into the organization, to do so, ask to the Apps group on the Apps XMPP room."),(0,n.kt)("p",null,"To transfer your app to the YunoHost-Apps organization, go to your repository and to ",(0,n.kt)("em",{parentName:"p"},"Settings")," tab.",(0,n.kt)("br",{parentName:"p"}),"\n","At the bottom of the page, you will find ",(0,n.kt)("em",{parentName:"p"},"Transfer ownership"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Into the field ",(0,n.kt)("em",{parentName:"p"},"New owner\u2019s GitHub username or organization name"),", type ",(0,n.kt)("em",{parentName:"p"},"YunoHost-Apps"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Your repo will be moved into the organization, you don't have to remove the original repository."),(0,n.kt)("h2",{id:"working-with-git-locally"},"Working with Git locally"),(0,n.kt)("p",null,"As we have seen, you can do a lot of things directly on GitHub.",(0,n.kt)("br",{parentName:"p"}),"\n","But when you need to edit multiple files, or when you need to work on your code on your own, it's better to work directly on your computer."),(0,n.kt)("p",null,"Before going to the hellish part of Git, let's see two different ways to start working with Git."),(0,n.kt)("h4",{id:"first-case-creating-a-new-package"},"First case: Creating a new package"),(0,n.kt)("p",null,"You have shockingly discovered that the wonderful app you love to use everyday does not yet have its YunoHost package. And because you're nice, you decided to create yourself the package, so everyone will enjoy that app the way you do.",(0,n.kt)("br",{parentName:"p"}),"\n","What a good idea!"),(0,n.kt)("p",null,"The best is to start from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/example_ynh"},"example app"),". But as we have explained before, you don't want to fork, because if you do so, you're going to keep that link to the example app and it's really annoying.",(0,n.kt)("br",{parentName:"p"}),"\n","So, you're going to do it differently. You're going to clone!"),(0,n.kt)("h5",{id:"git-clone"},"git clone"),(0,n.kt)("p",null,"To clone, you're going to do:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/YunoHost/example_ynh\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"git clone")," will download a copy of the repository. You will have the complete repository, with its branches, commits, and everything (into that apparently little ",(0,n.kt)("inlineCode",{parentName:"p"},".git")," directory)."),(0,n.kt)("p",null,"To git clone is usually the starting point of any local work with Git."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"A side note though, if you expect to send your modifications back to the distant repository on GitHub, be sure to have the permission to write on this repository. Otherwise, fork before and clone your fork, on which you do have the permission.")),(0,n.kt)("h5",{id:"my-brand-new-package-continued"},"My brand new package, continued"),(0,n.kt)("p",null,"In the context of a new package, you will also need to create a repository on GitHub to nest your package.\nWhich is as simple as a big green ",(0,n.kt)("em",{parentName:"p"},"New")," button.",(0,n.kt)("br",{parentName:"p"}),"\n","Don't bother with README, .gitignore or license. Just create the repository itself.",(0,n.kt)("br",{parentName:"p"}),"\n","you can now git clone that new repository.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"image://github_create_new_repo.png",alt:null})),(0,n.kt)("p",null,"You now have 2 repositories cloned on your computer.",(0,n.kt)("br",{parentName:"p"}),"\n","Copy all the files from the example_ynh app, ",(0,n.kt)("strong",{parentName:"p"},"except the .git directory")," (You just want the files themselves) to your new package.  "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"If you want, you can remove the example_ynh app. We don't need it anymore.")),(0,n.kt)("p",null,"You're ready to work on your new package !"),(0,n.kt)("h4",{id:"second-case-working-locally-on-a-repository"},"Second case: Working locally on a repository"),(0,n.kt)("p",null,"You already have a repository, but what you want is just to work locally, so you can modify multiple files.",(0,n.kt)("br",{parentName:"p"}),"\n","Simply clone the repository, the .git directory is the link to the distant repository. Nothing else to do than a ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone"),"."),(0,n.kt)("h4",{id:"branches-1"},"Branches"),(0,n.kt)("p",null,"You do have your local copy of the repository, but because you have read carefully this documentation until then, you know that you should be sure to be on the testing branch before starting to work."),(0,n.kt)("p",null,"To see the branches, and to know on which you actually are, while into the directory of your repository, type ",(0,n.kt)("inlineCode",{parentName:"p"},"git branch"),".",(0,n.kt)("br",{parentName:"p"}),"\n","The current branch is highlighted and preceded by a ",(0,n.kt)("inlineCode",{parentName:"p"},"*"),"."),(0,n.kt)("h4",{id:"git-checkout"},(0,n.kt)("inlineCode",{parentName:"h4"},"git checkout")),(0,n.kt)("p",null,"If it appears that you're not on the branch you wanted to be, or you're actually on master (which is bad !), you can move to another branch with ",(0,n.kt)("inlineCode",{parentName:"p"},"git checkout")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout testing\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Read carefully what Git says when you validate a command, do never forget that Git is sneaky...")),(0,n.kt)("h4",{id:"git-pull-before-anything-else"},(0,n.kt)("inlineCode",{parentName:"h4"},"git pull")," before anything else"),(0,n.kt)("p",null,"You're finally on the right branch, and ready to work.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Wait ! A nasty trap is waiting for you..."),(0,n.kt)("br",{parentName:"p"}),"\n","Before ending up in an inextricable situation. Start with a ",(0,n.kt)("inlineCode",{parentName:"p"},"git pull")," to update your branch to the latest change from the distant repository."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Sometimes, you will encounter an impossible situation where Git is saying that you can't pull because you have local changes. But you don't care of those local modifications, you just want to get the last version of the distant branch. But Git don't care about what YOU want..."),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("em",{parentName:"p"},"I have to admit that my only solution is as highly efficient as dirty... A good old ",(0,n.kt)("inlineCode",{parentName:"em"},"rm -r")," of the repository and a ",(0,n.kt)("inlineCode",{parentName:"em"},"git clone"))),(0,n.kt)("h4",{id:"lets-work"},"Let's work"),(0,n.kt)("p",null,"Eventually, you can work on your code.",(0,n.kt)("br",{parentName:"p"}),"\n","When you are finally ok with what you have done, it's time to validate your work."),(0,n.kt)("p",null,"The first step is to inform Git about which file(s) to validate. To do so, we'll use ",(0,n.kt)("inlineCode",{parentName:"p"},"git add")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git add my_file\ngit add my_other_file and_also_this_one\n")),(0,n.kt)("p",null,"If you want to validate all your work, you can also simply do"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git add --all\n")),(0,n.kt)("p",null,"To check the current status of your validation, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"git status"),". It will show you which files will be included into your commit, and which files are modified, but not yet included.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"git status -v")," will show also which part of the files are modified. A good way to be sure that you didn't make a mistake before committing."),(0,n.kt)("h4",{id:"git-checkout--b"},(0,n.kt)("inlineCode",{parentName:"h4"},"git checkout -b")),(0,n.kt)("p",null,"Before committing, or after, or before starting to work. Whenever you feel like it !",(0,n.kt)("br",{parentName:"p"}),"\n","You should consider adding your work to a separate branch, that way, it will be easy to create a pull request to merge into the testing branch and discuss with the other packagers what you suggest to change."),(0,n.kt)("p",null,"To create a new branch and move to this branch, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"git checkout -b my_new_branch"),"."),(0,n.kt)("h4",{id:"git-commit"},(0,n.kt)("inlineCode",{parentName:"h4"},"git commit")),(0,n.kt)("p",null,"To commit is simply to validate your work in Git. As you can do in GitHub.",(0,n.kt)("br",{parentName:"p"}),"\n","To have the same fields that you had on GitHub, with the name of the commit, and a longer explanation. You can simply use ",(0,n.kt)("inlineCode",{parentName:"p"},"git commit"),".",(0,n.kt)("br",{parentName:"p"}),"\n","The first line, before the comments, is for the name of the commit.",(0,n.kt)("br",{parentName:"p"}),"\n","After all the comments, you can add an explanation if you want to."),(0,n.kt)("p",null,"If you want to commit with only a name for your commit, you can use a simple command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "My commit name"\n')),(0,n.kt)("h4",{id:"push-to-the-distant-repository"},"Push to the distant repository"),(0,n.kt)("p",null,"Your changes are validated, but only on your local clone of the repository. Now, you have to send those modifications back to the distant repository on GitHub.",(0,n.kt)("br",{parentName:"p"}),"\n","In order to do that, you need to know what is your current branch. (If you don't know, ",(0,n.kt)("inlineCode",{parentName:"p"},"git branch")," will give you that info).",(0,n.kt)("br",{parentName:"p"}),"\n","Then you can git push"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git push -u origin BRANCH_NAME\n")))}h.isMDXComponent=!0}}]);