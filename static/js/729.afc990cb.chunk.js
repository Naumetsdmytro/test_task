"use strict";(self.webpackChunktest_task=self.webpackChunktest_task||[]).push([[729],{957:function(e,t,s){s.r(t),s.d(t,{default:function(){return T}});var r=s(433),n=s(861),a=s(439),o=s(757),c=s.n(o),i=s(791),u=s(243);u.Z.defaults.baseURL="https://6446441fee791e1e29fa64a9.mockapi.io/api/v1";var l=function(){var e=(0,n.Z)(c().mark((function e(t){var s,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/users?page=".concat(t,"&limit=3"));case 2:return s=e.sent,r=s.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=s.p+"static/media/cardPicture.010ab3c33bc13f300d33.png",d="TweetsListItem_cardContainer__MlZWp",A="TweetsListItem_cardAvatar__cPBz3",w="TweetsListItem_tweetsListItem__9B-zj",m="TweetsListItem_cardTextTweets__fUI3u",p="TweetsListItem_cardTextFollowers__U3vlJ TweetsListItem_cardTextTweets__fUI3u",_="TweetsListItem_followButton__gN8Um",h="TweetsListItem_followingButton__XCCob TweetsListItem_followButton__gN8Um",x="TweetsListItem_cardPicture__KvA3W",v="TweetsListItem_logo__QG22Z",g=s(184),k=function(e){var t=e.tweets,s=e.avatar,r=e.followers,n=e.user,o=(0,i.useState)((function(){var e=localStorage.getItem("users");return null!==e&&JSON.parse(e)})),c=(0,a.Z)(o,2),u=c[0],l=c[1];(0,i.useEffect)((function(){console.log(u),localStorage.setItem("isFollow",u)}),[u]);return(0,g.jsx)("li",{className:w,children:(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKGSURBVHgB1VixThtBEJ2L4sJICVJIQREKUpDiGkdK4xRpqPPHSZPCFCmSAgosAcVRuMANBS7OknnvbhaNlzvvnsF4edLIe765vd2nmTezly0Wi5+yfdzB/mRZVrY5YJ1f8fNJtow3kgZ2YAN5BUiFMGIfUfRFEkdKhBFHIG1fEkZqhBEDkLYjiSJFwnqwIUjrSYJ4G+k3h13AprAZrC+1UB/A9hr8b2GF+pfqf6AWA1cE/sp6mMDOdHwI+6zjE6krchu4zu8r7kcRRoJGKPn2RRyTjAKRcIRfK9Zj+J57c1T+8B3rgvoSRlUEGuaKwdytF3PM7Tq8fSwBvhJCKCWXyGKawHY9jdk148JuUP0ffHWekdQRGwMWgdiojAHX/lHtIeXdf9KcLUsIRdiNIYsb/yG1xvD6Uup0s1VtbBbBNMh1zDlOOBcN10zv2BYih/9UngffzPg3rNR9DSUSoQi7NmNqCskiKf+l1qmZjhkxtx65uXnWb0y7EFAVAYnX240itAib7053piDmxjqpjpUNvtLy30y6IRON7G0jFGFWq9wm+4yghrL/3owZfb5OWZJiRN+B84ykO8kbQYgwK4JMPS6aqXUsjwWyp8Ipeog+Nfdc6jp0EfLTVZXtpRFKyUOQUDixxvUv1aey5csCU7NKV9xny8F+qGc3rM/HHn/YohSSEEIR5rrupdbAkqUHZnd/D9cDl670ayBrKHF6NFmzB9soYioPN3nMSJO6g57rc0xJppa/+ar7h/+V1FomAf8m+CncFR/0+xnxrsUn16a2U/Xt4tz1aJPLeqhEftXHxMj3hw7wa30VSfHw/S8lkfeRGmEU+YkkjJQIS1LkfaRC2FNF/sVwDzHOB2t0D1rCAAAAAElFTkSuQmCC",alt:"logo",className:v}),(0,g.jsx)("img",{src:f,alt:"card background",className:x}),(0,g.jsx)("img",{src:s,alt:n,className:A}),(0,g.jsxs)("p",{className:m,children:[t," tweets"]}),(0,g.jsxs)("p",{className:p,children:[(u?r+1:r).toLocaleString("en-US")," followers"]}),(0,g.jsx)("button",{type:"button",onClick:function(){l((function(e){return!e}))},className:u?h:_,children:u?"FOLLOWING":"FOLLOW"})]})})},L="TweetsList_tweetsList__CBQUG",j=function(e){var t=e.users,s=t.map((function(e){return{id:e.id,isFollow:!1}}));return(0,i.useEffect)((function(){localStorage.setItem("users",JSON.stringify(s))}),[s]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("ul",{className:L,children:t.map((function(e){var t=e.tweets,s=e.avatar,r=e.followers,n=e.id,a=e.user;return(0,g.jsx)(k,{tweets:t,avatar:s,followers:r,user:a,id:n},n)}))})})},N="ButtonLoadMore_buttonLoadMore__IOwLn",I=function(e){var t=e.handleLoadMoreClick;return(0,g.jsx)("button",{onClick:t,className:N,children:"Load More"})},U=s(643),S="Loader_loader__+lRPl",b=function(){return(0,g.jsx)("div",{className:S,children:(0,g.jsx)(U.iT,{height:130,width:130,color:"#000",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#000",strokeWidth:2,strokeWidthSecondary:2})})},B="Tweets_container__895Mq",C="Tweets_buttonGoHome__sL8YG",R=s(87);function T(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),s=t[0],o=t[1],u=(0,i.useState)(1),f=(0,a.Z)(u,2),d=f[0],A=f[1],w=(0,i.useState)(!1),m=(0,a.Z)(w,2),p=m[0],_=m[1],h=(0,i.useState)(null),x=(0,a.Z)(h,2),v=x[0],k=x[1];(0,i.useEffect)((function(){_(!0);var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(d);case 3:if(t=e.sent,!(d>1)){e.next=6;break}return e.abrupt("return",o((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t))})));case 6:o(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k(e.t0.message);case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]);return(0,g.jsxs)("div",{className:B,children:[!p&&(0,g.jsx)(R.rU,{to:"/",children:(0,g.jsx)("button",{className:C,children:"Go Home"})}),(0,g.jsx)(j,{users:s}),s.length<12&&!p&&(0,g.jsx)(I,{handleLoadMoreClick:function(){A((function(e){return e+1}))}}),p&&(0,g.jsx)(b,{}),v&&(0,g.jsx)("h2",{children:v})]})}}}]);
//# sourceMappingURL=729.afc990cb.chunk.js.map