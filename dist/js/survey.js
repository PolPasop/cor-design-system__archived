const data = [{
  "name": "nine",
  "number": 10
}, {
  "name": "wax",
  "number": 15
}, {
  "name": "abaft",
  "number": 20
}, {
  "name": "shiver",
  "number": 25
}, {
  "name": "consist",
  "number": 30
}, {
  "name": "butter",
  "number": 35
}, {
  "name": "cup",
  "number": 40
}, {
  "name": "plausible",
  "number": 45
}, {
  "name": "delight",
  "number": 50
}, {
  "name": "stiff",
  "number": 2
}, {
  "name": "capable",
  "number": 3
}, {
  "name": "big",
  "number": 100
}, {
  "name": "way",
  "number": 88
}, {
  "name": "continue",
  "number": 63
}, {
  "name": "polish",
  "number": 42
}, {
  "name": "illegal",
  "number": 21
}, {
  "name": "drown",
  "number": 11
}, {
  "name": "scrape",
  "number": 96
}];
const template$1 = document.createElement('template');
template$1.innerHTML = `
  <style>
  :host {
    display: block;
    contain: content;
  }

  ul {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 2.5rem;
    list-style: none;
    padding: 0;
  }
  
  li:nth-child(2n+1) {
    --color: #181;
  }

  li:nth-child(3n+1) {
    --color: #33a;
  }

  li:nth-child(4n+1) {
    --color: #c38;
  }

  li {
    --size: calc(var(--number) * 0.08rem);

    color: var(--color);
    line-height: var(--size);
    list-style: none;
    font-size: max( 1rem, var(--size));
    padding: 0.125rem 0.25rem;
  }
  
  

  </style>
  <ul>
    ${data.map(item => `<li data-number="${item.number}" style="--number:${item.number};">${item.name}</li>`).join('')}
  </ul >
  `;

class CorWordCloud extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template$1.content.cloneNode(true));
  }

}

customElements.define('cor-word-cloud', CorWordCloud);

const template = document.createElement('template');
template.innerHTML = `
  <style>
    span {
      align-items: center;
      background: white;
      border: solid 1px green;
      color: white;
      display: flex;
      height: 50px;
      padding-left: 2rem;
      position: relative;
      z-index: 0;
    }

    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }

    span:after {
      background: green;
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      left: 0;
      transition: 1s;
      transform: scaleX(calc(var(--value) * 1%));
      width: calc(var(--value) * 1%);
      z-index: -1;
    }
  </style>
  <slot></slot>
`;

class CorBarGraph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

}

customElements.define('cor-bar-graph', CorBarGraph);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5LmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy93b3JkY2xvdWQvd29yZGNsb3VkLmpzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvYmFyZ3JhcGgvYmFyZ3JhcGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF0YSA9XHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJuaW5lXCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDEwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJ3YXhcIixcclxuICAgICAgXCJudW1iZXJcIjogMTVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcImFiYWZ0XCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDIwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJzaGl2ZXJcIixcclxuICAgICAgXCJudW1iZXJcIjogMjVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcImNvbnNpc3RcIixcclxuICAgICAgXCJudW1iZXJcIjogMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcImJ1dHRlclwiLFxyXG4gICAgICBcIm51bWJlclwiOiAzNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiY3VwXCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDQwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJwbGF1c2libGVcIixcclxuICAgICAgXCJudW1iZXJcIjogNDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcImRlbGlnaHRcIixcclxuICAgICAgXCJudW1iZXJcIjogNTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcInN0aWZmXCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcImNhcGFibGVcIixcclxuICAgICAgXCJudW1iZXJcIjogM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiYmlnXCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDEwMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwid2F5XCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDg4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJjb250aW51ZVwiLFxyXG4gICAgICBcIm51bWJlclwiOiA2M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwicG9saXNoXCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDQyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJpbGxlZ2FsXCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDIxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJkcm93blwiLFxyXG4gICAgICBcIm51bWJlclwiOiAxMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwic2NyYXBlXCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDk2XHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG4gIDxzdHlsZT5cclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRhaW46IGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBsaTpudGgtY2hpbGQoMm4rMSkge1xyXG4gICAgLS1jb2xvcjogIzE4MTtcclxuICB9XHJcblxyXG4gIGxpOm50aC1jaGlsZCgzbisxKSB7XHJcbiAgICAtLWNvbG9yOiAjMzNhO1xyXG4gIH1cclxuXHJcbiAgbGk6bnRoLWNoaWxkKDRuKzEpIHtcclxuICAgIC0tY29sb3I6ICNjMzg7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICAtLXNpemU6IGNhbGModmFyKC0tbnVtYmVyKSAqIDAuMDhyZW0pO1xyXG5cclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tc2l6ZSk7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZm9udC1zaXplOiBtYXgoIDFyZW0sIHZhcigtLXNpemUpKTtcclxuICAgIHBhZGRpbmc6IDAuMTI1cmVtIDAuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuICA8L3N0eWxlPlxyXG4gIDx1bD5cclxuICAgICR7ZGF0YS5tYXAoaXRlbSA9PiBgPGxpIGRhdGEtbnVtYmVyPVwiJHtpdGVtLm51bWJlcn1cIiBzdHlsZT1cIi0tbnVtYmVyOiR7aXRlbS5udW1iZXJ9O1wiPiR7aXRlbS5uYW1lfTwvbGk+YCkuam9pbignJyl9XHJcbiAgPC91bCA+XHJcbiAgYDtcclxuXHJcbmNsYXNzIENvcldvcmRDbG91ZCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcclxuICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Nvci13b3JkLWNsb3VkJywgQ29yV29yZENsb3VkKTsiLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuICA8c3R5bGU+XHJcbiAgICBzcGFuIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4IGdyZWVuO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBzbGlkZUluRnJvbUxlZnQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGFuOmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKGNhbGModmFyKC0tdmFsdWUpICogMSUpKTtcclxuICAgICAgd2lkdGg6IGNhbGModmFyKC0tdmFsdWUpICogMSUpO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICA8L3N0eWxlPlxyXG4gIDxzbG90Pjwvc2xvdD5cclxuYDtcclxuXHJcbmNsYXNzIENvckJhckdyYXBoIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29yLWJhci1ncmFwaCcsIENvckJhckdyYXBoKTsiXSwibmFtZXMiOlsiZGF0YSIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwibWFwIiwiaXRlbSIsIm51bWJlciIsIm5hbWUiLCJqb2luIiwiQ29yV29yZENsb3VkIiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJzaGFkb3dSb290IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJDb3JCYXJHcmFwaCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBSSxHQUNSLENBQ0U7QUFDRSxVQUFRLE1BRFY7QUFFRSxZQUFVO0FBRlosQ0FERixFQUtFO0FBQ0UsVUFBUSxLQURWO0FBRUUsWUFBVTtBQUZaLENBTEYsRUFTRTtBQUNFLFVBQVEsT0FEVjtBQUVFLFlBQVU7QUFGWixDQVRGLEVBYUU7QUFDRSxVQUFRLFFBRFY7QUFFRSxZQUFVO0FBRlosQ0FiRixFQWlCRTtBQUNFLFVBQVEsU0FEVjtBQUVFLFlBQVU7QUFGWixDQWpCRixFQXFCRTtBQUNFLFVBQVEsUUFEVjtBQUVFLFlBQVU7QUFGWixDQXJCRixFQXlCRTtBQUNFLFVBQVEsS0FEVjtBQUVFLFlBQVU7QUFGWixDQXpCRixFQTZCRTtBQUNFLFVB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
