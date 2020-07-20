(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(1),n=a(9),o=(a(0),a(155)),i={id:"dao",title:"The DAO",sidebar_label:"The DAO"},s={id:"dao",title:"The DAO",description:"Raid Guild is structured as Distributed Autonomous Organization - better known as a DAO.",source:"@site/docs\\dao.md",permalink:"./docs/dao",editUrl:"https://github.com/raid-guild/handbook/edit/master/docs/dao.md",sidebar_label:"The DAO",sidebar:"someSidebar",previous:{title:"Overview",permalink:"./docs/overview"},next:{title:"How To",permalink:"./docs/howTo"}},l=[{value:"Moloch V2 Primer",id:"moloch-v2-primer",children:[]},{value:"Proposal Types",id:"proposal-types",children:[]},{value:"Proposal Process",id:"proposal-process",children:[]},{value:"Raid Guild Shares",id:"raid-guild-shares",children:[]},{value:"Contract Addresses",id:"contract-addresses",children:[]}],c={rightToc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Raid Guild is structured as Distributed Autonomous Organization - better known as a DAO."),Object(o.b)("p",null,"You can access the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pokemol.com/dao/0xbeb3e32355a933501c247e2dbde6e6ca2489bf3d/proposals/Completed"}),"Raid Guild DAO here"),"."),Object(o.b)("p",null,"As a DAO, members have staked capital (in the form of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://weth.io/"}),"WETH"),") to the War Chest in exchange for Shares. All capital is held by a trustless smart contract and distributed in accordance to Proposals governed by Members. No one person owns the keys to the smart contract, and funding can only be distributed if consensus is reached among shareholders."),Object(o.b)("p",null,"Every member of Raid Guild has at least 1 Share, and Shares are used to vote on proposals and access private channels in Discord."),Object(o.b)("p",null,"Raid Guild uses Wrapped Ether as it\u2019s base currency, which can be quickly converted to and from ETH using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://wrapeth.com/"}),"Wrap ETH")," tool (made with love by the Raid Guild)."),Object(o.b)("h3",{id:"moloch-v2-primer"},"Moloch V2 Primer"),Object(o.b)("p",null,"Raid Guild utilizes the Moloch V2 framework. A great overview of Moloch V2 and it\u2019s benefits can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/raid-guild/moloch-evolved-v2-primer-25c9cdeab455"}),"here"),"."),Object(o.b)("p",null,"Moloch was popularized due to its Minimum Viable DAO design and the advent of \u201cragequit\u201d - a means for members to exit the DAO by exchanging their shares for a pro-rata claim on the War Chest\u2019s assets."),Object(o.b)("p",null,"The TLDR of Moloch V2 is that it allows for an optimized War Chest and new Proposal Types. Moloch V2 can hold hundreds of different ERC20 tokens, and allows for anyone (including those without shares) to make a proposal to the DAO."),Object(o.b)("h3",{id:"proposal-types"},"Proposal Types"),Object(o.b)("p",null,"Within the War Chest, members can make a number of different proposals including:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Membership")," - Requesting new shares to join the DAO"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Funding")," - Requesting funding from the DAO"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Whitelist Token")," - Request to add support for a new ERC20 token."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GuildKick")," - Request to forcibly remove a malicious member through a vote"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Trading")," - Request the DAO to swap assets within the War Chest")),Object(o.b)("h3",{id:"proposal-process"},"Proposal Process"),Object(o.b)("p",null,"To submit a proposal, select Proposals followed by ",Object(o.b)("strong",{parentName:"p"},"New Proposal"),"."),Object(o.b)("p",null,"Select the Proposal Type (described above) and fill in all fields. Here are some of the things you\u2019ll want to keep in mind when filling out a proposal."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TITLE:")," Enter a description of the proposal. Example: New Member - Igor Bogdanoff"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DESCRIPTION:")," Anything you believe is relevant to your proposal. The shorter the description the better, and the important piece here is the ",Object(o.b)("em",{parentName:"li"},"WHAT")," you are asking for and ",Object(o.b)("em",{parentName:"li"},"WHY"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LINK:")," Whatever information gives us the best context to review your proposal and make an informed decision."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SHARE REQUESTED:")," The number of Shares request. Every Raid Guild Share is equal to 0.1WETH. New members may request a maximum of 10 shares for a total of 1WETH."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TOKEN TRIBUTE:")," The amount of capital you are committing to deposit to the War Chest. Tribute is relevant to Membership Proposals."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"+ LOOT:")," Loot is a non-voting share. This means you will have shares which can be raqequit but do not hold voting rights. Loot shares cost the same as regular share at 0.1WETH/share.")),Object(o.b)("p",null,"After submitting a proposal, it will enter the ",Object(o.b)("strong",{parentName:"p"},"Unsponsored Proposals")," section. This means someone with shares (which could be you) must Champion the proposal in order for it to be moved to voting."),Object(o.b)("p",null,"Once the proposal has been sponsored it will enter the ",Object(o.b)("strong",{parentName:"p"},"Queue"),". The queue ensures proposals are funneled to voting in an orderly fashion. One proposal will go from the queue to the Voting Period once every two hours."),Object(o.b)("p",null,"Once in the ",Object(o.b)("strong",{parentName:"p"},"Voting Period"),", members can now vote on the proposal. Every proposal has a 72 hour voting period in which it must receive more Yes than No votes to pass."),Object(o.b)("p",null,"After voting has ended, the proposal enters a ",Object(o.b)("strong",{parentName:"p"},"Grace Period")," which gives members time to raqeguit if they do not like the outcome of the vote. The grace period lasts 48 hours."),Object(o.b)("p",null,"Next, The proposal is sent to ",Object(o.b)("strong",{parentName:"p"},"Processing")," in which the vote is time stamped on-chain."),Object(o.b)("p",null,"After being processed, the proposal is marked as ",Object(o.b)("strong",{parentName:"p"},"Completed"),", and all shares, funds or outcomes are enacted. All outcomes of a proposal that affect you can be viewed by clicking your Address (top or bottom right) and selecting ",Object(o.b)("strong",{parentName:"p"},"My Account"),"."),Object(o.b)("p",null,"For members which received Funding, you will need to withdraw the funding from the DAO contract under Internal Balances."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note: If you mess up your proposal, you can cancel it while in it remains Unsponsored. To do so, click the proposal and hit Cancel at the bottom. Any tribute can be withdrawn from Internal Balances to resubmit with the correct amount(s).")),Object(o.b)("h3",{id:"raid-guild-shares"},"Raid Guild Shares"),Object(o.b)("p",null,"All Shares are non-transferable and unique to the DAO being used (in this case Raid Guild)."),Object(o.b)("p",null,"Each share represents a pro-rata claim on the underlying capital pool and can be exchanged at any time using the Ragequit feature."),Object(o.b)("p",null,"There is no cap on the amount of shares which can be issued, and each share carries one vote."),Object(o.b)("p",null,"All new shares are issued at a rate of 0.1WETH/share and new members may request a maximum of 10 shares when joining."),Object(o.b)("h3",{id:"contract-addresses"},"Contract Addresses"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Address"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DAO"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0xbeb3e32355a933501c247e2dbde6e6ca2489bf3d")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Minion"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0x17405148473E521b62cBCf8eBd929E8A30C4D3aA")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NFT Certificates"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0x7b408ad9019c20c5a1222Bf7f7e58A6Fa00A086a")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NFT Badges"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0xAA65E7c8BBf3F2C6d2d8634Fc830F050a55BBbF9")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NFT Sale Trading Cards"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0x3480a5E2E8A381F200F2e547f5aE6c3042e67449")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ENS Subdomain Registrar"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0x5Cb634C351A03FF2BfB59C73dB8B429FFdFBbB62")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ETH Registry"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Public Resolver"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0xDaaF96c344f63131acadD0Ea35170E7892d3dfBA")))))}b.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=r,h=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return a?n.a.createElement(h,s(s({ref:t},c),{},{components:a})):n.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);