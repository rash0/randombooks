(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(28)},17:function(e,t,a){},24:function(e,t,a){},27:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAACUCAMAAACqToeIAAAAUVBMVEXw7+Hb07/c1cHk387s6tvv7d/t693r6Nje18Pg2sff2MXg2sjo5NTl4dDp5tbn49Li3Mrj3szj3czo5dTr6Nnm4dDe1sPt7N3d1sPo5tXq59eqzMSzAAABwUlEQVR4Xu3YaYrcQAxA4adavW+9TJL7HzQeGGhs949MERUM6F3gw8Yqi+I/Z1mWZVmWZVmWZVlW2H5JST5SUG6lNF/AeSlP+G7x6+Ha33y3UOIt8tkzU1CJJ591kZreztXzivKxrie+sifmvc8888wzb5nvQJxWJ3tN3/ea3pr4iriKyAjoeS7zCgZlr0kAw9KINFsGBlXPBSB08lWfYNT0JiC4oz/oef2JE2ki6HkZ6OSQV/Qa4Cankp43Av3Zm/W8DFHOdXoecJdLap4DHlfvruW19T3Wq3fT9Pqr96j8Pm8/93s5BUxXL2rO+0fNeZ+B7uw99Lzl3Xn9oedJApp6/yMZgXDguqjpSQJu7sDFWdHrOOxLSwSvug9uAEzrTvb+rr4PinSx6r4r4saXGBdR93ZxG3KEMG1O9iZV71qGVNNLkCt6DTDreE9gfDchm44nEcLZC4BT8qbrBuOBSZS8FojdZfxbLU8GIK4vbo3ALGqeBIA0942I6x8JIDhFTwZODU40PWkzr0iL/n3P0w8BIOSxs/uzf8o881xN7yYyV/T+tO1EPe9t5vkyzlNYLAJ95KdnWZZlWZZlWZZlWdZfb1EYDR6GCTgAAAAASUVORK5CYII="},28:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(3),r=a.n(l),o=(a(17),a(1)),c=a.n(o),i=a(4),m=a(5),u=a(6),h=a(10),f=a(7),p=a(11),d=a(8),g=a.n(d),v=function(e){e.type;var t=e.color;return n.a.createElement(g.a,{className:"mx-auto",type:"spin",color:t,height:48,width:50})},A=a(9),E=a.n(A),N=(a(24),function(e){function t(){var e,s;Object(m.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(s=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={title:"Some We Love, Some We Hate, Some We Eat: Why Its So Hard to Think Straight About Animals",author:"Hal Herzog",img:a(27),rating:3.56,pages:263,year:1998,info:"No description available",isOpen:!0,collapseClass:"coll",buttonStatus:"Get a random Book"},s.toggleInfo=function(){s.setState({isOpen:!s.state.isOpen})},s.collapseEvent=function(){"coll"===s.state.collapseClass?(s.fatherOfRequests(),s.setState({buttonStatus:n.a.createElement(v,null)})):s.setState({collapseClass:"coll",buttonStatus:"Get a random Book"})},s}return Object(p.a)(t,e),Object(u.a)(t,[{key:"fatherOfRequests",value:function(){var e=Object(i.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/rbr");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,this.setState({title:a.title[0],author:a.authors[0].author.length>1?a.authors[0].author[0].name[0]+" & "+a.authors[0].author[1].name[0]:a.authors[0].author[0].name[0],img:a.image_url[0],rating:a.average_rating[0],pages:a.num_pages[0],year:a.publication_year[0],info:a.description[0],buttonStatus:"Get a random Book"});case 9:this.setState({collapseClass:"coll on"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Father of Requests error is"+e.t0);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"renderedInfo",value:function(){var e=this.state.info;return!0===this.state.isOpen&&e.length>530?e.slice(0,530):e}},{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:this.state.collapseClass},n.a.createElement("div",{className:"container fi"},n.a.createElement("div",{className:"row p-4"},n.a.createElement("div",{className:"col-4 col-xl-4 col-lg-4 col-md-4 col-sm-4"},n.a.createElement("img",{className:"img-fluid",src:this.state.img,alt:"sad....."})),n.a.createElement("div",{className:"col-8 col-xl-8 col-lg-8 col-md-8 col-sm-8"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h4",{className:"text-left w-100 ml-4"},this.state.title),n.a.createElement("h6",{className:"text-left ml-4"},"by ",this.state.author)),n.a.createElement("div",{className:"col-12"},n.a.createElement("h6",{className:"d-flex justify-content-start w-100 ml-4"},n.a.createElement(E.a,{count:5,value:parseFloat(this.state.rating),half:!0,edit:!1,size:17,color2:"#ffd700"})," \xa0 ",this.state.rating),n.a.createElement("h6",{className:"text-left  w-100 ml-4"},"Pages: ",0!==Number(this.state.pages)?this.state.pages:"unknown"),n.a.createElement("h6",{className:"text-left  w-100 ml-4"},"Published: ",0!==Number(this.state.year)?this.state.year:"unknown"))),n.a.createElement("div",{className:"col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-4 mr-5"},n.a.createElement("p",{className:"text-justify pt-3"},n.a.createElement("span",null,""===this.state.info?"No available synopsis":this.renderedInfo()),n.a.createElement("a",{onClick:this.toggleInfo},this.state.info.length<530?"":this.state.isOpen?"...more":" less")))))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("button",{onClick:this.collapseEvent,className:"col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 btn"},this.state.buttonStatus))))}}]),t}(n.a.Component));r.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[12,2,1]]]);