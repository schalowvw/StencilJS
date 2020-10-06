class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = ':TEXT ATTRIB NOT SET:';
  }

  connectedCallback() {
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    tooltipIcon.addEventListener('mouseenter', this._showTooltip);
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip);
    this.appendChild(tooltipIcon);

    const tooltipText = this.getAttribute('text');
    this._tooltipText = tooltipText ? tooltipText : this._tooltipText;
  }

  _showTooltip = () => {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    this.appendChild(this._tooltipContainer);
  };

  _hideTooltip = () => {
    this.removeChild(this._tooltipContainer);
  };
}

customElements.define('uc-tooltip', Tooltip, {});