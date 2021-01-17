precision mediump float;
uniform float time;

varying vec4 vColor;
varying vec3 pos;

void main() {
	gl_FragColor = vec4(
		.1 + vColor.r * sin(time*0.4 + pos.x),
		vColor.g * cos(time*0.01 - vColor.x),
		vColor.b * abs(sin(time - pos.y) / abs(sin(time*0.4 - vColor.b)) + abs(cos(time*0.4 - vColor.r))),
		1.0
	);
}