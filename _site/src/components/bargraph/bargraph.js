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
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('cor-bar-graph', CorBarGraph);