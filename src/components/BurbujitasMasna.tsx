"use client";

import { FC, useEffect, useRef } from "react";

interface BurbujitasMasnaProps {}

const BurbujitasMasna: FC<BurbujitasMasnaProps> = ({}) => {
	const burbujasRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		let intervalo: NodeJS.Timeout | null = null;
		const crearBurbujasCauuuunsa = () => {
			const div = burbujasRef.current;
			if (!div) return;
			const burbuja = document.createElement("span");
			var size = Math.random() * 28;
			var minSize = 10;

			burbuja.style.width = size < minSize ? minSize + "px" : size + "px";
			burbuja.style.height =
				size < minSize ? minSize + "px" : size + "px";
			burbuja.style.left = Math.random() * 250 + "px";

			burbuja.addEventListener("click", () => {
				burbuja.classList.add("rompido");
			});

			div?.appendChild(burbuja);

			setTimeout(() => {
				burbuja.remove();
			}, 3400);
		};

		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					intervalo = setInterval(crearBurbujasCauuuunsa, 200);
				} else {
					if (intervalo) {
						clearInterval(intervalo);
						intervalo = null;
					}
				}
			});
		};

		const observador = new IntersectionObserver(handleIntersection, {
			threshold: 0.5,
		});

		if (burbujasRef.current) {
			observador.observe(burbujasRef.current);
		}

		return () => {
			if (intervalo) {
				clearInterval(intervalo);
			}
			if (burbujasRef.current) {
				observador.unobserve(burbujasRef.current);
			}
		};
	}, []);
	return <div ref={burbujasRef} className='pieza burbujas-masna'></div>;
};

export default BurbujitasMasna;
