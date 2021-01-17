precision mediump float;
uniform float time;

varying vec4 vColor;
varying vec3 pos;

void main() {
	gl_FragColor = vec4(
		.1 + vColor.r * abs(sin(time*0.4 + pos.z) + pos.x),
		vColor.g * abs(cos(time*0.4 - vColor.b) + pos.z),
		vColor.b * abs(sin(time*0.4 - pos.x) / abs(sin(time*0.4 - vColor.b)) + abs(cos(time*0.4 - vColor.r))),
		1.0
	);
}