const data =
  [
    {
      "name": "nine",
      "number": 10
    },
    {
      "name": "wax",
      "number": 15
    },
    {
      "name": "abaft",
      "number": 20
    },
    {
      "name": "shiver",
      "number": 25
    },
    {
      "name": "consist",
      "number": 30
    },
    {
      "name": "butter",
      "number": 35
    },
    {
      "name": "cup",
      "number": 40
    },
    {
      "name": "plausible",
      "number": 45
    },
    {
      "name": "delight",
      "number": 50
    },
    {
      "name": "stiff",
      "number": 2
    },
    {
      "name": "capable",
      "number": 3
    },
    {
      "name": "big",
      "number": 100
    },
    {
      "name": "way",
      "number": 88
    },
    {
      "name": "continue",
      "number": 63
    },
    {
      "name": "polish",
      "number": 42
    },
    {
      "name": "illegal",
      "number": 21
    },
    {
      "name": "drown",
      "number": 11
    },
    {
      "name": "scrape",
      "number": 96
    }
  ];

const template = document.createElement('template');
template.innerHTML = `
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
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('cor-word-cloud', CorWordCloud);