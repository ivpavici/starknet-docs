"use strict";(self.webpackChunkstarknet_docs=self.webpackChunkstarknet_docs||[]).push([[544],{3905:function(e,a,t){t.d(a,{Zo:function(){return i},kt:function(){return k}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),N=o(t),k=r,d=N["".concat(l,".").concat(k)]||N[k]||c[k]||s;return t?n.createElement(d,m(m({ref:a},i),{},{components:t})):n.createElement(d,m({ref:a},i))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=N;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var o=2;o<s;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},869:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(7294),r=t(6775),s="apiTable_BHCF";var m=(0,n.forwardRef)((function(e,a){var t=e.name,s=e.children,m=function(e){for(var a=e;(0,n.isValidElement)(a);)a=n.Children.toArray(a.props.children)[0];return a}(s),p=t?t+"-"+m:m,l="#"+p,o=(0,r.k6)();return n.createElement("tr",{id:p,tabIndex:0,ref:o.location.hash===l?a:void 0,onClick:function(){o.push(l)},onKeyDown:function(e){"Enter"===e.key&&o.push(l)}},s.props.children)}));function p(e){var a=e.children,t=e.name,r=n.Children.toArray(a.props.children),p=r[0],l=r[1],o=(0,n.useRef)(null);(0,n.useEffect)((function(){var e;null==(e=o.current)||e.focus()}),[o]);var i=n.Children.map(l.props.children,(function(e){return n.createElement(m,{name:t,ref:o},e)}));return n.createElement("table",{className:s},p,n.createElement("tbody",null,i))}},2905:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return k}});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),m=t(869),p=["components"],l={},o="Block structure",i={unversionedId:"Blocks/header",id:"Blocks/header",title:"Block structure",description:"In StarkNet, the block is defined as a list of transactions and a block header.",source:"@site/docs/Blocks/header.md",sourceDirName:"Blocks",slug:"/Blocks/header",permalink:"/docs/Blocks/header",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Blocks/header.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Transaction Lifecycle",permalink:"/docs/Blocks/transaction-life-cycle"}},c=[{value:"Block header",id:"block-header",children:[],level:2},{value:"Block hash",id:"block-hash",children:[],level:2}],N={toc:c};function k(e){var a=e.components,t=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"block-structure"},"Block structure"),(0,s.kt)("p",null,"In StarkNet, the block is defined as a list of transactions and a block header."),(0,s.kt)("h2",{id:"block-header"},"Block header"),(0,s.kt)("p",null,"The following fields define the block header:"),(0,s.kt)(m.Z,{mdxType:"APITable"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Implemented"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"parent_block_hash")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"FieldElement")),(0,s.kt)("td",{parentName:"tr",align:null},"The hash of this block's parent"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"block_number")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Integer")),(0,s.kt)("td",{parentName:"tr",align:null},"The number (height) of this block"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"global_state_root")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"FieldElement")),(0,s.kt)("td",{parentName:"tr",align:null},"The state ",(0,s.kt)("a",{parentName:"td",href:"../State/starknet-state#state-commitment"},"commitment")," after this block"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"sequencer_address")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"FieldElement")),(0,s.kt)("td",{parentName:"tr",align:null},"The StarkNet address of the sequencer who created this block"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"block_timestamp")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Timestamp")),(0,s.kt)("td",{parentName:"tr",align:null},"The time the sequencer created this block before executing transactions"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"transaction_count")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Integer")),(0,s.kt)("td",{parentName:"tr",align:null},"The number of transactions in a block"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"transaction_commitment")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"FieldElement")),(0,s.kt)("td",{parentName:"tr",align:null},"A commitment to the transactions included in the block"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"event_count")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Integer")),(0,s.kt)("td",{parentName:"tr",align:null},"The number of events"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"event_commitment")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"FieldElement")),(0,s.kt)("td",{parentName:"tr",align:null},"A commitment to the events produced in this block"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"protocol_version")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Integer")),(0,s.kt)("td",{parentName:"tr",align:null},"The version of the StarkNet protocol used when creating this block"),(0,s.kt)("td",{parentName:"tr",align:"center"})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"extra data")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"FieldElement")),(0,s.kt)("td",{parentName:"tr",align:null},"Extraneous data that might be useful for running transactions"),(0,s.kt)("td",{parentName:"tr",align:"center"}))))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"commitments")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The commitment fields transaction_commitment, event_commitment are the roots of a height 64 binary Merkle Patricia tree. The leaf at index ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.65952em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," corresponds to the hash of the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"i"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"h")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i'th")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," event/transaction."))),(0,s.kt)("h2",{id:"block-hash"},"Block hash"),(0,s.kt)("p",null,"The block hash is defined as the Pedersen hash over the header's elements."),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mtable",{parentName:"semantics",rowspacing:"0.24999999999999992em",columnalign:"right left",columnspacing:"0em"},(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"B"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"(")))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mrow",{parentName:"mrow"}),(0,s.kt)("mtext",{parentName:"mrow"},"block_number"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0global_state_root"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0sequencer_address"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0block_timestamp"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","))))),(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"}))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mrow",{parentName:"mrow"}),(0,s.kt)("mtext",{parentName:"mrow"},"transaction_count"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0transaction_commitment"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0event_count"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","))))),(0,s.kt)("mtr",{parentName:"mtable"},(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"}))),(0,s.kt)("mtd",{parentName:"mtr"},(0,s.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,s.kt)("mrow",{parentName:"mstyle"},(0,s.kt)("mrow",{parentName:"mrow"}),(0,s.kt)("mtext",{parentName:"mrow"},"event_commitment"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0parent_block_hash"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")))))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\begin{aligned} h(B)=h(&\\text{block\\_number}, \\text{ global\\_state\\_root}, \\text{ sequencer\\_address}, \\text{ block\\_timestamp}, \\\\ &\\text{transaction\\_count}, \\text{ transaction\\_commitment}, \\text{ event\\_count},\\\\ & \\text{event\\_commitment}, 0, 0, \\text{ parent\\_block\\_hash}) \\end{aligned}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"4.500000000000002em",verticalAlign:"-2.000000000000001em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mtable"},(0,s.kt)("span",{parentName:"span",className:"col-align-r"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.5000000000000004em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-4.66em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.16em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"})),(0,s.kt)("span",{parentName:"span",style:{top:"-1.6599999999999993em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"}))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.000000000000001em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"col-align-l"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.5000000000000004em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-4.66em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"block_number")),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0global_state_root")),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0sequencer_address")),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0block_timestamp")),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.16em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"transaction_count")),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0transaction_commitment")),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0event_count")),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","))),(0,s.kt)("span",{parentName:"span",style:{top:"-1.6599999999999993em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"event_commitment")),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0parent_block_hash")),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.000000000000001em"}},(0,s.kt)("span",{parentName:"span"})))))))))))),(0,s.kt)("p",null,"Where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," is the ",(0,s.kt)("a",{parentName:"p",href:"../Hashing/hash-functions#pedersen-hash"},"Pedersen")," hash."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"placeholders")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Zeroes inside the hash computation of an object are used as placeholders, to be replaced in the future by meaningful fields."))))}k.isMDXComponent=!0}}]);