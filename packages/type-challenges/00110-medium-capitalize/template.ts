type Uppermap = {
	a: "A";
	b: "B";
	c: "C";
	d: "D";
	e: "E";
	f: "F";
	g: "G";
	h: "H";
	i: "I";
	j: "J";
	k: "K";
	l: "L";
	m: "M";
	n: "N";
	o: "O";
	p: "P";
	q: "Q";
	r: "R";
	s: "S";
	t: "T";
	u: "U";
	v: "V";
	w: "W";
	x: "X";
	y: "Y";
	z: "Z";
};
type MyUppercase<S extends string> = S extends keyof Uppermap ? Uppermap[S] : S;

type MyCapitalize<S extends string> = S extends `${infer Char}${infer Rest}`
	? `${MyUppercase<Char>}${Rest}`
	: S;
