!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i);}}function e(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function n(t){var e=t.trim().match(/^(-?[0-9]*\.?[0-9]*)(px|%)$/);return e?{value:e[1],unit:e[2]}:null}var i=new WeakMap,r=[];function o(t){return t===document.scrollingElement?document:t}function l(t){var e=i.get(t).animations;if(0!==e.length)for(var n=t.currentTime,r=0;r<e.length;r++)null==n?"paused"===e[r].playState&&e[r].cancel():e[r].currentTime=n;}function a(t){return Infinity===t.iterationCount?Infinity:Math.max((t.startDelay||0)+(t.duration||0)*(t.iterationCount||1)+(t.endDelay||0),0)}function s(t,e,i,r,o){if(o)return o(e,i,r,"0%"===t?"start":"end");"block"===i?i="vertical":"inline"===i&&(i="horizontal");var l="vertical"===i?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth,a=n("auto"===r?t:r);return "%"===a.unit?parseFloat(a.value)*l/100:parseFloat(a.value)}var c=function(){function t(t){i.set(this,{scrollSource:null,orientation:"block",startScrollOffset:"auto",endScrollOffset:"auto",timeRange:"auto",fill:"none",animations:[],animationOptions:[]}),this.scrollSource=t&&t.scrollSource||document.scrollingElement,this.orientation=t&&t.orientation||"block",this.startScrollOffset=t&&t.startScrollOffset||"auto",this.endScrollOffset=t&&t.endScrollOffset||"auto",this.timeRange=t&&t.timeRange||"auto",this.fill=t&&t.fill||"none";}return e(t,[{key:"scrollSource",set:function(t){var e=this;this.scrollSource&&o(this.scrollSource).removeEventListener("scroll",function(){return l(e)}),t instanceof Element||(t=document.scrollingElement),i.get(this).scrollSource=t,o(t).addEventListener("scroll",function(){return l(e)}),l(this);},get:function(){return i.get(this).scrollSource}},{key:"orientation",set:function(t){-1===["block","inline","horizontal","vertical"].indexOf(t)&&(t="block"),i.get(this).orientation=t,l(this);},get:function(){return i.get(this).orientation}},{key:"startScrollOffset",set:function(t){var e=i.get(this);e.startScrollOffsetFunction=null;for(var n=0;n<r.length;n++){var o=r[n].parse(t);if(void 0!==o){t=o,e.startScrollOffsetFunction=r[n].evaluate;break}}e.startScrollOffset=t,l(this);},get:function(){return i.get(this).startScrollOffset}},{key:"endScrollOffset",set:function(t){i.get(this).endScrollOffsetFunction=null;for(var e=0;e<r.length;e++){var n=r[e].parse(t);if(void 0!==n){t=n,i.get(this).endScrollOffsetFunction=r[e].evaluate;break}}i.get(this).endScrollOffset=t,l(this);},get:function(){return i.get(this).endScrollOffset}},{key:"timeRange",set:function(t){i.get(this).timeRange=t,l(this);},get:function(){return i.get(this).timeRange}},{key:"currentTime",get:function(){if(!this.scrollSource)return null;var t,e,n=s("0%",this.scrollSource,this.orientation,this.startScrollOffset,i.get(this).startScrollOffsetFunction),r=s("100%",this.scrollSource,this.orientation,this.endScrollOffset,i.get(this).endScrollOffsetFunction),o=function(t){var e=t.timeRange;if("auto"===e){e=0;for(var n=i.get(t).animationOptions,r=0;r<n.length;r++)e=Math.max(e,a(n[r]));Infinity===e&&(e=0);}return e}(this),l=this.scrollSource.scrollTop;return "inline"!==this.orientation&&"horizontal"!==this.orientation||(l=this.scrollSource.scrollLeft),l<n?"none"===this.fill||"forwards"===this.fill?null:0:l>=r?r<(t=this.scrollSource,"block"===(e=this.orientation)?e="vertical":"inline"===e&&(e="horizontal"),"vertical"===e?t.scrollHeight-t.clientHeight:"horizontal"===e?t.scrollWidth-t.clientWidth:void 0)&&("none"===this.fill||"backwards"===this.fill)?null:o:(l-n)/(r-n)*o}},{key:"__polyfill",get:function(){return !0}}]),t}(),u=new WeakMap,h=[[[0,1,2,3]],[[0,2],[1,3]],[[0],[1,3],[2]],[[0],[1],[2],[3]]],f=function(){function t(t){u.set(this,{target:null,edge:"start",threshold:0,rootMargin:[[0,"px"],[0,"px"],[0,"px"],[0,"px"]]}),this.target=t.target,this.edge=t.edge||"start",this.threshold=t.threshold||0,this.rootMargin=t.rootMargin||"0px 0px 0px 0px",this.clamp=t.clamp||!1;}return e(t,[{key:"target",set:function(t){if(!(t instanceof Element))throw u.get(this).target=null,Error("Intersection target must be an element.");u.get(this).target=t;},get:function(){return u.get(this).target}},{key:"edge",set:function(t){-1!=["start","end"].indexOf(t)&&(u.get(this).edge=t);},get:function(){return u.get(this).edge}},{key:"threshold",set:function(t){var e=parseFloat(t);if(e<0||e>1)throw RangeError("threshold must be in the range [0, 1]");u.get(this).threshold=e;},get:function(){return u.get(this).threshold}},{key:"rootMargin",set:function(t){var e=t.split(/ +/);if(e.length<1||e.length>4)throw TypeError("rootMargin must contain between 1 and 4 length components");for(var i=[[],[],[],[]],r=0;r<e.length;r++){var o=n(e[r]);if(!o)throw TypeError("Unrecognized rootMargin length");for(var l=h[e.length-1][r],a=0;a<l.length;a++)i[l[a]]=[parseFloat(o.value),o.unit];}u.get(this).rootMargin=i;},get:function(){return u.get(this).rootMargin.map(function(t){return t.join("")}).join(" ")}},{key:"clamp",set:function(t){u.get(this).clamp=!!t;}}]),t}(),g=window.Element.prototype.animate;if(r.push({parse:function(t){if(t.target)return new f(t)},evaluate:function(t,e,n,i){"block"==e?e="vertical":"inline"==e&&(e="horizontal");for(var r,o=t==document.scrollingElement?{left:0,right:t.clientWidth,top:0,bottom:t.clientHeight,width:t.clientWidth,height:t.clientHeight}:t.getBoundingClientRect(),l=u.get(n).rootMargin,a=[],s=0;s<4;s++)a.push("%"==(r=l[s])[1]?r[0]*(s%2==0?o.height:o.width)/100:r[0]);var c=o.left-a[3],h=o.right-o.left+a[3]+a[1],f=o.top-a[0],g=o.bottom-o.top+a[0]+a[2],d=u.get(n).clamp,m=n.target.getBoundingClientRect(),p=n.threshold;if("start"==n.edge&&(p=1-p),"vertical"==e){var v=m.top+m.height*p-f+t.scrollTop;return d?"end"==n.edge?Math.max(0,v-g):Math.min(v,t.scrollHeight-g):"end"==n.edge?v-g:v}var S=m.left+m.width*p-c+t.scrollLeft;return d?"end"==n.edge?Math.max(0,S-h):Math.min(S,t.scrollWidth-h):"end"==n.edge?S-h:S}}),!Reflect.defineProperty(window,"ScrollTimeline",{value:c}))throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");if(!Reflect.defineProperty(Element.prototype,"animate",{value:function(t,e){var n=e.timeline;if(!(n&&n instanceof c))return g.apply(this,[t,e]);delete e.timeline;var r=g.apply(this,[t,e]);return r.pause(),function(t,e,n){var r=i.get(t).animations,o=i.get(t).animationOptions;r.push(e),o.push(n),l(t);}(n,r,e),r}}))throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element")}();

const {
  matches: motionOK
} = window.matchMedia('(prefers-reduced-motion: no-preference)'); // grab and stash elements

const tabgroup = document.querySelector('snap-tabs');
const tabsection = tabgroup.querySelector(':scope > section');
const tabnav = tabgroup.querySelector(':scope nav');
const tabnavitems = tabnav.querySelectorAll(':scope a');
const tabindicator = tabgroup.querySelector(':scope .snap-indicator');
/* 
  shared timeline for .indicator 
  and nav > a colors */

const sectionScrollTimeline = new ScrollTimeline({
  scrollSource: tabsection,
  orientation: 'inline',
  fill: 'both'
});
/*
  for each nav link
  - animate color based on the scroll timeline
  - color is active when its the current index*/

tabnavitems.forEach(navitem => {
  navitem.animate({
    color: [...tabnavitems].map(item => item === navitem ? `var(--text-active-color)` : `var(--text-color)`)
  }, {
    duration: 1000,
    fill: 'both',
    timeline: sectionScrollTimeline
  });
});

if (motionOK) {
  tabindicator.animate({
    transform: [...tabnavitems].map(({
      offsetLeft
    }) => `translateX(${offsetLeft}px)`),
    width: [...tabnavitems].map(({
      offsetWidth
    }) => `${offsetWidth}px`)
  }, {
    duration: 1000,
    fill: 'both',
    timeline: sectionScrollTimeline
  });
}

const setActiveTab = tabbtn => {
  tabnav.querySelector(':scope a[active]').removeAttribute('active');
  tabbtn.setAttribute('active', '');
  tabbtn.scrollIntoView();
};

const determineActiveTabSection = () => {
  const i = tabsection.scrollLeft / tabsection.clientWidth;
  const matchingNavItem = tabnavitems[i];
  matchingNavItem && setActiveTab(matchingNavItem);
};

tabnav.addEventListener('click', e => {
  if (e.target.nodeName !== "A") return;
  setActiveTab(e.target);
});
tabsection.addEventListener('scroll', () => {
  clearTimeout(tabsection.scrollEndTimer);
  tabsection.scrollEndTimer = setTimeout(determineActiveTabSection, 100);
});

window.onload = () => {
  if (location.hash) tabsection.scrollLeft = document.querySelector(location.hash).offsetLeft;
  determineActiveTabSection();
};

// src/main.js
function jobs () {
  console.log('version ' + version);
}

export default jobs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9icy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIiwiLi4vLi4vc3JjL2pzL2pvYnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdodHRwczovL2FyZ3lsZWluay5naXRodWIuaW8vc2Nyb2xsLXRpbWVsaW5lL2Rpc3Qvc2Nyb2xsLXRpbWVsaW5lLmpzJztcclxuXHJcbmNvbnN0IHsgbWF0Y2hlczogbW90aW9uT0sgfSA9IHdpbmRvdy5tYXRjaE1lZGlhKFxyXG4gICcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSknXHJcbilcclxuXHJcbi8vIGdyYWIgYW5kIHN0YXNoIGVsZW1lbnRzXHJcbmNvbnN0IHRhYmdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc25hcC10YWJzJylcclxuY29uc3QgdGFic2VjdGlvbiA9IHRhYmdyb3VwLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IHNlY3Rpb24nKVxyXG5jb25zdCB0YWJuYXYgPSB0YWJncm91cC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgbmF2JylcclxuY29uc3QgdGFibmF2aXRlbXMgPSB0YWJuYXYucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlIGEnKVxyXG5jb25zdCB0YWJpbmRpY2F0b3IgPSB0YWJncm91cC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgLnNuYXAtaW5kaWNhdG9yJylcclxuXHJcbi8qIFxyXG4gIHNoYXJlZCB0aW1lbGluZSBmb3IgLmluZGljYXRvciBcclxuICBhbmQgbmF2ID4gYSBjb2xvcnMgKi9cclxuY29uc3Qgc2VjdGlvblNjcm9sbFRpbWVsaW5lID0gbmV3IFNjcm9sbFRpbWVsaW5lKHtcclxuICBzY3JvbGxTb3VyY2U6IHRhYnNlY3Rpb24sXHJcbiAgb3JpZW50YXRpb246ICdpbmxpbmUnLFxyXG4gIGZpbGw6ICdib3RoJyxcclxufSlcclxuXHJcbi8qXHJcbiAgZm9yIGVhY2ggbmF2IGxpbmtcclxuICAtIGFuaW1hdGUgY29sb3IgYmFzZWQgb24gdGhlIHNjcm9sbCB0aW1lbGluZVxyXG4gIC0gY29sb3IgaXMgYWN0aXZlIHdoZW4gaXRzIHRoZSBjdXJyZW50IGluZGV4Ki9cclxudGFibmF2aXRlbXMuZm9yRWFjaChuYXZpdGVtID0+IHtcclxuICBuYXZpdGVtLmFuaW1hdGUoe1xyXG4gICAgY29sb3I6IFsuLi50YWJuYXZpdGVtc10ubWFwKGl0ZW0gPT5cclxuICAgICAgaXRlbSA9PT0gbmF2aXRlbVxyXG4gICAgICAgID8gYHZhcigtLXRleHQtYWN0aXZlLWNvbG9yKWBcclxuICAgICAgICA6IGB2YXIoLS10ZXh0LWNvbG9yKWApXHJcbiAgfSwge1xyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICBmaWxsOiAnYm90aCcsXHJcbiAgICB0aW1lbGluZTogc2VjdGlvblNjcm9sbFRpbWVsaW5lLFxyXG4gIH1cclxuICApXHJcbn0pXHJcblxyXG5pZiAobW90aW9uT0spIHtcclxuICB0YWJpbmRpY2F0b3IuYW5pbWF0ZSh7XHJcbiAgICB0cmFuc2Zvcm06IFsuLi50YWJuYXZpdGVtc10ubWFwKCh7IG9mZnNldExlZnQgfSkgPT5cclxuICAgICAgYHRyYW5zbGF0ZVgoJHtvZmZzZXRMZWZ0fXB4KWApLFxyXG4gICAgd2lkdGg6IFsuLi50YWJuYXZpdGVtc10ubWFwKCh7IG9mZnNldFdpZHRoIH0pID0+XHJcbiAgICAgIGAke29mZnNldFdpZHRofXB4YClcclxuICB9LCB7XHJcbiAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgIGZpbGw6ICdib3RoJyxcclxuICAgIHRpbWVsaW5lOiBzZWN0aW9uU2Nyb2xsVGltZWxpbmUsXHJcbiAgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3Qgc2V0QWN0aXZlVGFiID0gdGFiYnRuID0+IHtcclxuICB0YWJuYXZcclxuICAgIC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgYVthY3RpdmVdJylcclxuICAgIC5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpXHJcblxyXG4gIHRhYmJ0bi5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKVxyXG4gIHRhYmJ0bi5zY3JvbGxJbnRvVmlldygpXHJcbn1cclxuXHJcbmNvbnN0IGRldGVybWluZUFjdGl2ZVRhYlNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaSA9IHRhYnNlY3Rpb24uc2Nyb2xsTGVmdCAvIHRhYnNlY3Rpb24uY2xpZW50V2lkdGhcclxuICBjb25zdCBtYXRjaGluZ05hdkl0ZW0gPSB0YWJuYXZpdGVtc1tpXVxyXG5cclxuICBtYXRjaGluZ05hdkl0ZW0gJiYgc2V0QWN0aXZlVGFiKG1hdGNoaW5nTmF2SXRlbSlcclxufVxyXG5cclxudGFibmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lICE9PSBcIkFcIikgcmV0dXJuXHJcbiAgc2V0QWN0aXZlVGFiKGUudGFyZ2V0KVxyXG59KVxyXG5cclxudGFic2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgY2xlYXJUaW1lb3V0KHRhYnNlY3Rpb24uc2Nyb2xsRW5kVGltZXIpXHJcbiAgdGFic2VjdGlvbi5zY3JvbGxFbmRUaW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICBkZXRlcm1pbmVBY3RpdmVUYWJTZWN0aW9uXHJcbiAgICAsIDEwMClcclxufSlcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgaWYgKGxvY2F0aW9uLmhhc2gpXHJcbiAgICB0YWJzZWN0aW9uLnNjcm9sbExlZnQgPSBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcihsb2NhdGlvbi5oYXNoKVxyXG4gICAgICAub2Zmc2V0TGVmdFxyXG5cclxuICBkZXRlcm1pbmVBY3RpdmVUYWJTZWN0aW9uKClcclxufSIsIi8vIHNyYy9tYWluLmpzXHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy90YWJzL3RhYnMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnNvbGUubG9nKCd2ZXJzaW9uICcgKyB2ZXJzaW9uKTtcclxufSJdLCJuYW1lcyI6WyJtYXRjaGVzIiwibW90aW9uT0siLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwidGFiZ3JvdXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YWJzZWN0aW9uIiwidGFibmF2IiwidGFibmF2aXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFiaW5kaWNhdG9yIiwic2VjdGlvblNjcm9sbFRpbWVsaW5lIiwiU2Nyb2xsVGltZWxpbmUiLCJzY3JvbGxTb3VyY2UiLCJvcmllbnRhdGlvbiIsImZpbGwiLCJmb3JFYWNoIiwibmF2aXRlbSIsImFuaW1hdGUiLCJjb2xvciIsIm1hcCIsIml0ZW0iLCJkdXJhdGlvbiIsInRpbWVsaW5lIiwidHJhbnNmb3JtIiwib2Zmc2V0TGVmdCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJzZXRBY3RpdmVUYWIiLCJ0YWJidG4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImRldGVybWluZUFjdGl2ZVRhYlNlY3Rpb24iLCJpIiwic2Nyb2xsTGVmdCIsImNsaWVudFdpZHRoIiwibWF0Y2hpbmdOYXZJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJub2RlTmFtZSIsImNsZWFyVGltZW91dCIsInNjcm9sbEVuZFRpbWVyIiwic2V0VGltZW91dCIsIm9ubG9hZCIsImxvY2F0aW9uIiwiaGFzaCIsImNvbnNvbGUiLCJsb2ciLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU07QUFBRUEsRUFBQUEsT0FBTyxFQUFFQztBQUFYLElBQXdCQyxNQUFNLENBQUNDLFVBQVAsQ0FDNUIseUNBRDRCLENBQTlCOztBQUtBLE1BQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWpCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHSCxRQUFRLENBQUNFLGFBQVQsQ0FBdUIsa0JBQXZCLENBQW5C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
