"use strict";(self.webpackChunkyunohost_docs=self.webpackChunkyunohost_docs||[]).push([[9506],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(a),k=r,d=u["".concat(p,".").concat(k)]||u[k]||c[k]||s;return a?n.createElement(d,l(l({ref:t},m),{},{components:a})):n.createElement(d,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},94406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const s={title:"NetData",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_netdata"}},l=void 0,i={unversionedId:"applications/docs/app_netdata",id:"applications/docs/app_netdata",title:"NetData",description:"NetData is a system for distributed real-time performance and health monitoring.",source:"@site/docs/04.applications/10.docs/app_netdata.md",sourceDirName:"04.applications/10.docs",slug:"/applications/docs/app_netdata",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_netdata",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04.applications/10.docs/app_netdata.md",tags:[],version:"current",frontMatter:{title:"NetData",template:"docs",taxonomy:{category:"docs, apps"},routes:{default:"/app_netdata"}},sidebar:"tutorialSidebar",previous:{title:"Navidrome",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_navidrome"},next:{title:"Neutrinet",permalink:"/yunodocusaurus/ca/docs/applications/docs/app_neutrinet"}},p={},o=[{value:"Features",id:"features",level:2},{value:"What does it monitor?",id:"what-does-it-monitor",level:2},{value:"Links",id:"links",level:2}],m={toc:o},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://my-netdata.io/"},"NetData")," is a system for ",(0,r.kt)("strong",{parentName:"p"},"distributed real-time performance and health monitoring"),".\nIt provides ",(0,r.kt)("strong",{parentName:"p"},"unparalleled insights, in real-time"),", of everything happening on the\nsystem it runs (including applications such as web and database servers), using\n",(0,r.kt)("strong",{parentName:"p"},"modern interactive web dashboards"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"netdata is ",(0,r.kt)("strong",{parentName:"em"},"fast")," and ",(0,r.kt)("strong",{parentName:"em"},"efficient"),", designed to permanently run on all systems\n(",(0,r.kt)("strong",{parentName:"em"},"physical")," & ",(0,r.kt)("strong",{parentName:"em"},"virtual")," servers, ",(0,r.kt)("strong",{parentName:"em"},"containers"),", ",(0,r.kt)("strong",{parentName:"em"},"IoT")," devices), without\ndisrupting their core function.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install-app.yunohost.org/?app=netdata"},(0,r.kt)("img",{parentName:"a",src:"https://install-app.yunohost.org/install-with-yunohost.png",alt:"Install NetData with YunoHost"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Customization brought by the package:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"grant MySQL statistics access via a ",(0,r.kt)("inlineCode",{parentName:"li"},"netdata")," user"),(0,r.kt)("li",{parentName:"ul"},"NGINX root log statistics via putting ",(0,r.kt)("inlineCode",{parentName:"li"},"netdata")," user in the ",(0,r.kt)("inlineCode",{parentName:"li"},"adm")," group"),(0,r.kt)("li",{parentName:"ul"},"Dovecot statistics via giving access to Dovecot stats stocket to ",(0,r.kt)("inlineCode",{parentName:"li"},"netdata")," user (works only with Dovecot 2.2.16+)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Further recommendations:"),"\nWe don't allow YunoHost packages to make sensible changes to system files. So here are further customizations you can make to allow more monitoring:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NGINX: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"requests/connections: follow ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/firehol/netdata/tree/master/python.d#nginx"},"these recommandations")," to enable ",(0,r.kt)("inlineCode",{parentName:"li"},"/stab_status")," (for example by putting the ",(0,r.kt)("inlineCode",{parentName:"li"},"location")," section in ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/nginx/conf.d/yunohost_admin.conf")),(0,r.kt)("li",{parentName:"ul"},"weblogs: you can monitor all your NGINX weblogs for errors; follow ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/firehol/netdata/tree/master/python.d#nginx_log"},"these recommendations")))),(0,r.kt)("li",{parentName:"ul"},"PHP-FPM: follow ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/firehol/netdata/tree/master/python.d#phpfpm"},"these recommandations"))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://cloud.githubusercontent.com/assets/2662304/19168687/f6a567be-8c19-11e6-8561-ce8d589e8346.gif"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stunning interactive bootstrap dashboards"),(0,r.kt)("br",null),"\nmouse and touch friendly, in 2 themes: dark, light")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Amazingly fast"),(0,r.kt)("br",null),"\nresponds to all queries in less than 0.5 ms per metric,\neven on low-end hardware")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Highly efficient"),(0,r.kt)("br",null),"\ncollects thousands of metrics per server per second,\nwith just 1% CPU utilization of a single core, a few MB of RAM and no disk I/O at all")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sophisticated alarming"),(0,r.kt)("br",null),"\nhundreds of alarms, ",(0,r.kt)("strong",{parentName:"p"},"out of the box"),"!",(0,r.kt)("br",null),"\nsupports dynamic thresholds, hysteresis, alarm templates,\nmultiple role-based notification methods (such as email, slack.com,\npushover.net, pushbullet.com, telegram.org, twilio.com, messagebird.com)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Extensible"),(0,r.kt)("br",null),"\nyou can monitor anything you can get a metric for,\nusing its Plugin API (anything can be a NetData plugin,\nBASH, Python, Perl, Node.JS, Java, Go, Ruby, etc.)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Embeddable"),(0,r.kt)("br",null),"\nit can run anywhere a Linux kernel runs (even IoT)\nand its charts can be embedded on your web pages too")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Customizable"),(0,r.kt)("br",null),"\ncustom dashboards can be built using simple HTML (no JavaScript necessary)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Zero configuration"),(0,r.kt)("br",null),"\nauto-detects everything, it can collect up to 5000 metrics\nper server out of the box")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Zero dependencies"),(0,r.kt)("br",null),"\nit is even its own web server, for its static web files and its web API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Zero maintenance"),(0,r.kt)("br",null),"\nyou just run it, it does the rest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scales to infinity"),(0,r.kt)("br",null),"\nrequiring minimal central resources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"several operating modes"),(0,r.kt)("br",null),"\nautonomous host monitoring, headless data collector, forwarding proxy, store and forward proxy, central multi-host monitoring, in all possible configurations.\nEach node may have different metrics retention policy and run with or without health monitoring.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"time-series back-ends supported"),(0,r.kt)("br",null),"\ncan archive its metrics on ",(0,r.kt)("inlineCode",{parentName:"p"},"graphite"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opentsdb"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus"),", JSON document DBs, in the same or lower detail\n(lower: to prevent it from congesting these servers due to the amount of data collected)"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/2662304/14092712/93b039ea-f551-11e5-822c-beadbf2b2a2e.gif",alt:"netdata"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-does-it-monitor"},"What does it monitor?"),(0,r.kt)("p",null,"netdata collects several thousands of metrics per device.\nAll these metrics are collected and visualized in real-time."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Almost all metrics are auto-detected, without any configuration."))),(0,r.kt)("p",null,"This is a list of what it currently monitors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CPU"),(0,r.kt)("br",null),"\nusage, interrupts, softirqs, frequency, total and per core, CPU states")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Memory"),(0,r.kt)("br",null),"\nRAM, swap and kernel memory usage, KSM (Kernel Samepage Merging), NUMA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Disks"),(0,r.kt)("br",null),"\nper disk: I/O, operations, backlog, utilization, space, software RAID (md)"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/2662304/14093195/c882bbf4-f554-11e5-8863-1788d643d2c0.gif",alt:"sda"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Network interfaces"),(0,r.kt)("br",null),"\nper interface: bandwidth, packets, errors, drops"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/2662304/14093128/4d566494-f554-11e5-8ee4-5392e0ac51f0.gif",alt:"dsl0"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IPv4 networking"),(0,r.kt)("br",null),"\nbandwidth, packets, errors, fragments,\nTCP: connections, packets, errors, handshake,\nUDP: packets, errors,\nbroadcast: bandwidth, packets,\nmulticast: bandwidth, packets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IPv6 networking"),(0,r.kt)("br",null),"\nbandwidth, packets, errors, fragments, ECT,\nUDP: packets, errors,\nUDP-Lite: packets, errors,\nbroadcast: bandwidth,\nmulticast: bandwidth, packets,\nICMP: messages, errors, echos, router, neighbor, MLDv2, group membership,\nbreak down by type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Interprocess Communication - IPC"),(0,r.kt)("br",null),"\nsuch as semaphores and semaphores arrays")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"netfilter / iptables Linux firewall"),(0,r.kt)("br",null),"\nconnections, connection tracker events, errors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Linux DDoS protection"),(0,r.kt)("br",null),"\nSYNPROXY metrics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"fping")," latencies",(0,r.kt)("br",null),"\nfor any number of hosts, showing latency, packets and packet loss"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/2662304/20464811/9517d2b4-af57-11e6-8361-f6cc57541cd7.png",alt:"image"})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Processes"),(0,r.kt)("br",null),"\nrunning, blocked, forks, active")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Entropy"),(0,r.kt)("br",null),"\nrandom numbers pool, using in cryptography")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"NFS file servers and clients"),(0,r.kt)("br",null),"\nNFS v2, v3, v4: I/O, cache, read ahead, RPC calls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Network QoS"),(0,r.kt)("br",null),"\nthe only tool that visualizes network ",(0,r.kt)("inlineCode",{parentName:"p"},"tc")," classes in realtime"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/2662304/14093004/68966020-f553-11e5-98fe-ffee2086fafd.gif",alt:"qos-tc-classes"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Linux Control Groups"),(0,r.kt)("br",null),"\ncontainers: systemd, lxc, docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Applications"),(0,r.kt)("br",null),"\nby grouping the process tree and reporting CPU, memory, disk reads,\ndisk writes, swap, threads, pipes, sockets - per group"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/2662304/14093565/67c4002c-f557-11e5-86bd-0154f5135def.gif",alt:"apps"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Users and User Groups resource usage"),(0,r.kt)("br",null),"\nby summarizing the process tree per user and group,\nreporting: CPU, memory, disk reads, disk writes, swap, threads, pipes, sockets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Apache and lighttpd web servers"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"mod-status")," (v2.2, v2.4) and cache log statistics, for multiple servers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"NGINX web servers"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"stub-status"),", for multiple servers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tomcat"),(0,r.kt)("br",null),"\naccesses, threads, free memory, volume")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"web server log files"),(0,r.kt)("br",null),"\nextracting in real-time, web server performance metrics and applying several health checks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"mySQL databases"),(0,r.kt)("br",null),"\nmultiple servers, each showing: bandwidth, queries/s, handlers, locks, issues,\ntmp operations, connections, binlog metrics, threads, innodb metrics, and more")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Postgres databases"),(0,r.kt)("br",null),"\nmultiple servers, each showing: per database statistics (connections, tuples\nread - written - returned, transactions, locks), backend processes, indexes,\ntables, write ahead, background writer and more")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Redis databases"),(0,r.kt)("br",null),"\nmultiple servers, each showing: operations, hit rate, memory, keys, clients, slaves")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"mongodb"),(0,r.kt)("br",null),"\noperations, clients, transactions, cursors, connections, asserts, locks, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"memcached databases"),(0,r.kt)("br",null),"\nmultiple servers, each showing: bandwidth, connections, items")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"elasticsearch"),(0,r.kt)("br",null),"\nsearch and index performance, latency, timings, cluster statistics, threads statistics, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ISC Bind name servers"),(0,r.kt)("br",null),"\nmultiple servers, each showing: clients, requests, queries, updates, failures and several per view metrics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"NSD name servers"),(0,r.kt)("br",null),"\nqueries, zones, protocols, query types, transfers, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Postfix email servers"),(0,r.kt)("br",null),"\nmessage queue (entries, size)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"exim email servers"),(0,r.kt)("br",null),"\nmessage queue (emails queued)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dovecot")," POP3/IMAP servers",(0,r.kt)("br",null))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ISC dhcpd"),(0,r.kt)("br",null),"\npools utilization, leases, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IPFS"),(0,r.kt)("br",null),"\nbandwidth, peers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Squid proxy servers"),(0,r.kt)("br",null),"\nmultiple servers, each showing: clients bandwidth and requests, servers bandwidth and requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HAproxy"),(0,r.kt)("br",null),"\nbandwidth, sessions, backends, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"varnish"),(0,r.kt)("br",null),"\nthreads, sessions, hits, objects, backends, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OpenVPN"),(0,r.kt)("br",null),"\nstatus per tunnel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Hardware sensors"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"lm_sensors")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IPMI"),": temperature, voltage, fans, power, humidity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"NUT and APC UPSes"),(0,r.kt)("br",null),"\nload, charge, battery voltage, temperature, utility metrics, output metrics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"PHP-FPM"),(0,r.kt)("br",null),"\nmultiple instances, each reporting connections, requests, performance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hddtemp"),(0,r.kt)("br",null),"\ndisk temperatures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"smartd"),(0,r.kt)("br",null),"\ndisk S.M.A.R.T. values")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SNMP devices"),(0,r.kt)("br",null),"\ncan be monitored too (although you will need to configure these)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"statsd"),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/firehol/netdata/wiki/statsd"},"netdata is a fully featured statsd server")))),(0,r.kt)("p",null,"And you can extend it, by writing plugins that collect data from any source, using any computer language."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Report a bug: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/YunoHost-Apps/netdata_ynh/issues"},"https://github.com/YunoHost-Apps/netdata_ynh/issues")),(0,r.kt)("li",{parentName:"ul"},"NetData website: ",(0,r.kt)("a",{parentName:"li",href:"http://my-netdata.io/"},"http://my-netdata.io/"))))}c.isMDXComponent=!0}}]);