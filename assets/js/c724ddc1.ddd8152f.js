"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9056],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6931:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={title:"Testing your app",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_testing",aliases:["/packaging_apps_levels"]}},l=void 0,r={unversionedId:"contribute/packaging_apps/testing",id:"contribute/packaging_apps/testing",title:"Testing your app",description:"Once you're done writing you app package, you'll want to check that everything works correctly. At first, you can manually try to install your app on some test server of your own : sudo yunohost app install ./path/to/mycustomapp_ynh",source:"@site/docs/06.contribute/10.packaging_apps/40.testing.md",sourceDirName:"06.contribute/10.packaging_apps",slug:"/contribute/packaging_apps/testing",permalink:"/yunodocusaurus/docs/contribute/packaging_apps/testing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06.contribute/10.packaging_apps/40.testing.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Testing your app",template:"docs",taxonomy:{category:"docs"},routes:{default:"/packaging_testing",aliases:["/packaging_apps_levels"]}},sidebar:"tutorialSidebar",previous:{title:"Adding documentation to your app",permalink:"/yunodocusaurus/docs/contribute/packaging_apps/doc"},next:{title:"Publishing your app on the catalog",permalink:"/yunodocusaurus/docs/contribute/packaging_apps/publishing"}},s={},c=[{value:"Package linter",id:"package-linter",level:2},{value:"Package check",id:"package-check",level:2},{value:"Package check&#39;s <code>tests.toml</code>",id:"package-checks-teststoml",level:3},{value:"Application quality levels",id:"application-quality-levels",level:3},{value:"Continous integration (CI)",id:"continous-integration-ci",level:2},{value:"Why create <code>package_check</code> + <code>yunorunner</code> rather than using well-known solutions like Gitlab-CI ?",id:"why-create-package_check--yunorunner-rather-than-using-well-known-solutions-like-gitlab-ci-",level:4}],p={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once you're done writing you app package, you'll want to check that everything works correctly. At first, you can manually try to install your app on some test server of your own : ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo yunohost app install ./path/to/mycustomapp_ynh")),(0,o.kt)("p",null,'Testing everything manually often becomes tedious ;). The YunoHost maintains several tools to automatically and somewhat "objectively" analyze and tests our 400+ apps catalog.'),(0,o.kt)("h2",{id:"package-linter"},"Package linter"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/package_linter"},"package linter")," performs a static analysis of your app to check a bunch of recommended practice."),(0,o.kt)("p",null,"It is pretty straightforward to run considering that you should only need Python installed."),(0,o.kt)("h2",{id:"package-check"},"Package check"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/package_check"},"Package check")," is a more elaborate software that will tests many scenarios for you app such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"installing, removing and reinstalling your app + validating that the app can indeed be accessed on its URL endpoint (with no 404/502 error)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"when installing on a root domain (",(0,o.kt)("inlineCode",{parentName:"li"},"domain.tld/"),")"),(0,o.kt)("li",{parentName:"ul"},"when installing in a domain subpatch (",(0,o.kt)("inlineCode",{parentName:"li"},"domain.tld/foobar"),")"),(0,o.kt)("li",{parentName:"ul"},"installing in private mode"),(0,o.kt)("li",{parentName:"ul"},"installing multiple instances"))),(0,o.kt)("li",{parentName:"ul"},"upgrading from the same version"),(0,o.kt)("li",{parentName:"ul"},"upgrading from older versions"),(0,o.kt)("li",{parentName:"ul"},"backup/restore"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("p",null,"Package check will then summarize the results and compute a quality level ranging from 0 to 8."),(0,o.kt)("p",null,"To run its tests, package check uses a LXC container to manipulate the package in a clean environment without any previous installations. Installing LXC/LXD is unfortunately not that straighforward (it kinda depends on your OS/distribution), though we documented how to do so ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/package_check#deploying-package_check"},"in the README"),"."),(0,o.kt)("h3",{id:"package-checks-teststoml"},"Package check's ",(0,o.kt)("inlineCode",{parentName:"h3"},"tests.toml")),(0,o.kt)("p",null,"Package check interfaces with your app's ",(0,o.kt)("inlineCode",{parentName:"p"},"tests.toml")," which allows to control a few things about which tests are run - though it is usually pretty empty as many things can be deduced from the app's manifest."),(0,o.kt)("p",null,"More info about the syntax here are also available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/package_check#teststoml-syntax"},"in the README")),(0,o.kt)("h3",{id:"application-quality-levels"},"Application quality levels"),(0,o.kt)("p",null,"Package check will compute a quality level ranging from 0 to 8."),(0,o.kt)("p",null,'Apps with level equal or lower than 4 are considered "bad quality" and YunoHost will discourage people from installing such apps.'),(0,o.kt)("p",null,"While this definition may vary with time, the current definition as of February 2023 is roughly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"level 0 (\xab Broken \xbb) : the application doesn't work at all or doesn't pass level 1 criterias"),(0,o.kt)("li",{parentName:"ul"},"level 1 (\xab Installable in at least one scenario \xbb) : At least one install succeeded, and there's no critical issue reported in the linter"),(0,o.kt)("li",{parentName:"ul"},"level 2 (\xab Installable in all scenarios \xbb) : All install scenarios tested (typically install on full domain, domain+subpath, multi-instance, private/public) succeeded"),(0,o.kt)("li",{parentName:"ul"},"level 3 (\xab Can be upgraded \xbb) : All upgrades tests from the current commit succeeded"),(0,o.kt)("li",{parentName:"ul"},"level 4 (\xab Can be backuped/restored \xbb) : All backup/restore tests succeeded"),(0,o.kt)("li",{parentName:"ul"},"level 5 (\xab No linter error \xbb) : No red errors reported by the linter"),(0,o.kt)("li",{parentName:"ul"},"level 6 (\xab App is in a community-operated git org \xbb) : The app is hosted on YunoHost-Apps organization. (From a maintenance / security point of view, we want to avoid the catalog being filled with apps that are privately-hosted and that the initial maintainer will ultimately abandon and that can't be maintained easily by the community)"),(0,o.kt)("li",{parentName:"ul"},"level 7 (\xab All tests succeeded + No linter warning \xbb) : Pass all test (including for example upgrade from past commits) and no warning reported by the linter"),(0,o.kt)("li",{parentName:"ul"},"level 8 (\xab Maintained and long-term good quality \xbb) : The app is not flagged as not-maintained / alpha / deprecated / obsolete in the catalog, and has been at least level 5 during the past ~year")),(0,o.kt)("h2",{id:"continous-integration-ci"},"Continous integration (CI)"),(0,o.kt)("p",null,"The YunoHost project also developed an interface called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost/yunorunner"},(0,o.kt)("inlineCode",{parentName:"a"},"yunorunner"))," which interfaces with ",(0,o.kt)("inlineCode",{parentName:"p"},"package_check"),", handles a job queue, and automatically add jobs to the queue using some triggers."),(0,o.kt)("p",null,"The two major ones are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ci-apps.yunohost.org/ci"},'The "official" CI'),': This where the "official" quality level of each app comes from. Jobs are triggered after each commit on the repo\'s master branch.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ci-apps-dev.yunohost.org/ci/"},'The "dev" CI'),": This is where people validate their pull request which is often more convenient than running ",(0,o.kt)("inlineCode",{parentName:"li"},"package_check")," yourself, and has the advantage of the results being automatically public, which facilitates collective debugging.")),(0,o.kt)("p",null,"Members of the YunoHost-Apps organization can trigger jobs on the dev CI directly from a pull request simply by commenting something like ",(0,o.kt)("inlineCode",{parentName:"p"},"!testme")," (cf for example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YunoHost-Apps/nextcloud_ynh/pull/532#issuecomment-1402751409"},"here"),"). A .png summary of the tests will be automatically displayed once the job completes (and you can click the link to see the entire job execution and debug it)."),(0,o.kt)("h4",{id:"why-create-package_check--yunorunner-rather-than-using-well-known-solutions-like-gitlab-ci-"},"Why create ",(0,o.kt)("inlineCode",{parentName:"h4"},"package_check")," + ",(0,o.kt)("inlineCode",{parentName:"h4"},"yunorunner")," rather than using well-known solutions like Gitlab-CI ?"),(0,o.kt)("p",null,"Constrain 1 : Gitlab-CI or other similar solutions are mostly based around Docker, while we use LXC. In particular, we do want to reuse LXC snapshots of successful install during other tests (upgrade, backup/restore, ..) rather than reinstalling the app from scratch everytime, which drastically reduces the test time. We could do so using Gitlab artifacts, but such artifacts are automatically made public which is not convenient because they contain a full filesystem and their only use it to speed up the test process. Moreover, in the Gitlab-CI paradigm, jobs are not running on the same machine and they would need to download the snapshot which can be lengthy. The other mechanism, caching, is explicitly advertised as not reliable in Gitlab's-CI doc. What would be helpful would be some non-public artifact system (see similar discussion ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/gitlab-org/gitlab-runner/-/issues/336"},"here"),")"),(0,o.kt)("p",null,"Constrain 2 : Our test workflow is somewhat complex and we have 400+ apps to maintain. It's not acceptable to have to duplicate/maintain the CI logic in app each repository, so we need some sort of repo that handles the CI logic, while still being to supersed some behavior from the app repo itself. Gitlab-CI has some syntax which can allow this, but this remains quite laborious."),(0,o.kt)("p",null,"Constrain 3 : Having a common job queue/dashboard UI accross all app. In the Gitlab-CI paradigm, each repository has its own job queue/dashboard UI, but this is not really convenient."))}h.isMDXComponent=!0}}]);