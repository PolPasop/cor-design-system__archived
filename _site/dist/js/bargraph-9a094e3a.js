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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyZ3JhcGgtOWEwOTRlM2EuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3dvcmRjbG91ZC93b3JkY2xvdWQuanMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9iYXJncmFwaC9iYXJncmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkYXRhID1cclxuICBbXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIm5pbmVcIixcclxuICAgICAgXCJudW1iZXJcIjogMTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIndheFwiLFxyXG4gICAgICBcIm51bWJlclwiOiAxNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiYWJhZnRcIixcclxuICAgICAgXCJudW1iZXJcIjogMjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcInNoaXZlclwiLFxyXG4gICAgICBcIm51bWJlclwiOiAyNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiY29uc2lzdFwiLFxyXG4gICAgICBcIm51bWJlclwiOiAzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiYnV0dGVyXCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDM1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJjdXBcIixcclxuICAgICAgXCJudW1iZXJcIjogNDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcInBsYXVzaWJsZVwiLFxyXG4gICAgICBcIm51bWJlclwiOiA0NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiZGVsaWdodFwiLFxyXG4gICAgICBcIm51bWJlclwiOiA1MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwic3RpZmZcIixcclxuICAgICAgXCJudW1iZXJcIjogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJuYW1lXCI6IFwiY2FwYWJsZVwiLFxyXG4gICAgICBcIm51bWJlclwiOiAzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJiaWdcIixcclxuICAgICAgXCJudW1iZXJcIjogMTAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJ3YXlcIixcclxuICAgICAgXCJudW1iZXJcIjogODhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcImNvbnRpbnVlXCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDYzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJwb2xpc2hcIixcclxuICAgICAgXCJudW1iZXJcIjogNDJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcImlsbGVnYWxcIixcclxuICAgICAgXCJudW1iZXJcIjogMjFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcImRyb3duXCIsXHJcbiAgICAgIFwibnVtYmVyXCI6IDExXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcIm5hbWVcIjogXCJzY3JhcGVcIixcclxuICAgICAgXCJudW1iZXJcIjogOTZcclxuICAgIH1cclxuICBdO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXHJcbiAgPHN0eWxlPlxyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGFpbjogY29udGVudDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMi41cmVtO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGxpOm50aC1jaGlsZCgybisxKSB7XHJcbiAgICAtLWNvbG9yOiAjMTgxO1xyXG4gIH1cclxuXHJcbiAgbGk6bnRoLWNoaWxkKDNuKzEpIHtcclxuICAgIC0tY29sb3I6ICMzM2E7XHJcbiAgfVxyXG5cclxuICBsaTpudGgtY2hpbGQoNG4rMSkge1xyXG4gICAgLS1jb2xvcjogI2MzODtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIC0tc2l6ZTogY2FsYyh2YXIoLS1udW1iZXIpICogMC4wOHJlbSk7XHJcblxyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1zaXplKTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IG1heCggMXJlbSwgdmFyKC0tc2l6ZSkpO1xyXG4gICAgcGFkZGluZzogMC4xMjVyZW0gMC4yNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG4gIDwvc3R5bGU+XHJcbiAgPHVsPlxyXG4gICAgJHtkYXRhLm1hcChpdGVtID0+IGA8bGkgZGF0YS1udW1iZXI9XCIke2l0ZW0ubnVtYmVyfVwiIHN0eWxlPVwiLS1udW1iZXI6JHtpdGVtLm51bWJlcn07XCI+JHtpdGVtLm5hbWV9PC9saT5gKS5qb2luKCcnKX1cclxuICA8L3VsID5cclxuICBgO1xyXG5cclxuY2xhc3MgQ29yV29yZENsb3VkIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29yLXdvcmQtY2xvdWQnLCBDb3JXb3JkQ2xvdWQpOyIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxyXG4gIDxzdHlsZT5cclxuICAgIHNwYW4ge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogMDtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tTGVmdCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYW46YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoY2FsYyh2YXIoLS12YWx1ZSkgKiAxJSkpO1xyXG4gICAgICB3aWR0aDogY2FsYyh2YXIoLS12YWx1ZSkgKiAxJSk7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIDwvc3R5bGU+XHJcbiAgPHNsb3Q+PC9zbG90PlxyXG5gO1xyXG5cclxuY2xhc3MgQ29yQmFyR3JhcGggZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XHJcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb3ItYmFyLWdyYXBoJywgQ29yQmFyR3JhcGgpOyJdLCJuYW1lcyI6WyJkYXRhIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJtYXAiLCJpdGVtIiwibnVtYmVyIiwibmFtZSIsImpvaW4iLCJDb3JXb3JkQ2xvdWQiLCJIVE1MRWxlbWVudCIsImNvbnN0cnVjdG9yIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsInNoYWRvd1Jvb3QiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkNvckJhckdyYXBoIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFJLEdBQ1IsQ0FDRTtBQUNFLFVBQVEsTUFEVjtBQUVFLFlBQVU7QUFGWixDQURGLEVBS0U7QUFDRSxVQUFRLEtBRFY7QUFFRSxZQUFVO0FBRlosQ0FMRixFQVNFO0FBQ0UsVUFBUSxPQURWO0FBRUUsWUFBVTtBQUZaLENBVEYsRUFhRTtBQUNFLFVBQVEsUUFEVjtBQUVFLFlBQVU7QUFGWixDQWJGLEVBaUJFO0FBQ0UsVUFBUSxTQURWO0FBRUUsWUFBVTtBQUZaLENBakJGLEVBcUJFO0FBQ0UsVUFBUSxRQURWO0FBRUUsWUFBVTtBQUZaLENBckJGLEVBeUJFO0FBQ0UsVUFBUSxLQURWO0FBRUUsWUFBVTtBQUZaLENBekJGLEVB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
