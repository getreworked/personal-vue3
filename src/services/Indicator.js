export function Indicator ({
    width = 40,
    height = 40,
    stroke = 4,
    color = 'white',
    duration = 250,
    easing = 'linear',
    event
  }) {
    let { svg, circle } = this;

    const radius = (width / 2) - stroke;
    const circumference = 2 * Math.PI * radius;

    function updatePosition (e) {
      svg.style.left = e.x - (width / 2) + 'px';
      svg.style.top = e.y - (height / 2) + 'px';
    }

    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${ width } ${ height }`);
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.style.position = 'fixed';
    svg.style.pointerEvents = 'none';

    circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.style.transition = `all ${ duration }ms ${ easing }`;
    circle.setAttribute('cx', width / 2);
    circle.setAttribute('cy', height / 2);
    circle.setAttribute('r', radius);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', color);
    circle.setAttribute('stroke-width', stroke);
    circle.setAttribute('stroke-dasharray', circumference);
    circle.setAttribute('stroke-dashoffset', circumference);

    svg.appendChild(circle);
    document.body.appendChild(svg);

    updatePosition(event);

    // Queue animation for next cycle
    setTimeout(() => {
      circle.setAttribute('stroke-dashoffset', '0');
    }, 0);

    document.addEventListener('mousemove', updatePosition);

    this.kill = () => {
      document.removeEventListener('mousemove', updatePosition);
      svg.remove();
    }

    return this;
  }