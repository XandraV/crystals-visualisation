export default function shaders(color) {
  switch (color) {
    case "purple":
      return `
        varying vec2 vUv;
        void main() {
          vec2 xy = sin(1.5 * vUv);
          gl_FragColor = vec4(xy, 1.0, 1.0);
        }`;
    case "yellow":
      return `
        varying vec2 vUv;
        #define PI 3.14159265359
        void main() {
          float x = pow(cos(PI * vUv.x / 5.0), 2.0);
          float y = pow(sin(PI * vUv.y / 3.0), 2.0);
          gl_FragColor = vec4(1.0, x, y, 1.0);
        }`;
    case "brown":
      return `
        varying vec2 vUv;
        #define PI 3.14159265359
        void main() {
          float x = pow(cos(PI * vUv.x / 4.0), 4.0);
          float y = pow(sin(PI * vUv.y / 4.0), 2.0);
          gl_FragColor = vec4(1.0, x, y, 2.0);
        }`;
    case "green":
      return `
        varying vec2 vUv;
        #define PI 3.14159265359
        void main() {
          float x = pow(cos(PI * vUv.x / 4.0), 4.0);
          float y = pow(sin(PI * vUv.y / 4.0), 2.0);
          gl_FragColor = vec4(0.0, x, y, 2.0);
        }`;
    case "lightblue":
      return `
        varying vec2 vUv;
        #define PI 3.14159265359
        void main() {
          float x = 1.0 - pow(max(0.0, abs(vUv.x) * 2.0 - 1.0), 1.5);
          float y = 1.0 - pow(max(0.0, abs(vUv.y) * 2.0 - 1.0), 1.5);
          gl_FragColor = vec4(x, y, 1.0, 1.0);
        }`;
    case "blue":
      return `
        varying vec2 vUv;
        #define PI 3.14159265359
        void main() {
          float x = 1.0 - pow(max(0.0, abs(vUv.x) * 4.0 - 1.0), 1.5);
          float y = 1.0 - pow(max(0.0, abs(vUv.y) * 3.0 - 1.0), 1.5);
          gl_FragColor = vec4(x, y, 1.0, 1.0);
        }`;
    case "red":
      return `
        varying vec2 vUv;
        #define PI 3.14159265359
        void main() {
          float x = pow(cos(PI * vUv.x / 2.0), 5.0);
          float y = pow(sin(PI * vUv.y / 3.0), 2.0);
          gl_FragColor = vec4(1.0, x, y, 1.0);
        }`;
    case "pink":
      return `
        varying vec2 vUv;
        #define PI 3.14159265359
        void main() {
          float x = pow(cos(PI * vUv.x / 1.0), 2.0);
          float y = pow(sin(PI * vUv.y / 2.5), 0.5);
          gl_FragColor = vec4(1.0, x, y, 1.0);
        }
        `;
    case "grey":
      return `
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(0.7, 0.7, 0.6, 1.0);
      }`;
    case "bluePinkred":
      return `
        varying vec2 vUv;
        void main() {
          float x = 1.0 - abs(vUv.x);
          float y = 1.0 - abs(vUv.y);
          gl_FragColor = vec4(x, 0.0, y, 10);
        }`;
    default:
      return "";
  }
}
