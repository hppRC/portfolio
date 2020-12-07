precision mediump float;
uniform float time;

attribute vec4 color;

varying vec4 vColor;
varying vec3 pos;

void main() {
	vColor = color;
	pos = position;
	gl_Position = vec4(position, 1.0);
}