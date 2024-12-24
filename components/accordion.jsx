export default function Accordion({ question,answer,number }) {
    return(
        <div className="py-5">
			<details className="group duration-700 transition-all">
				<summary className="flex justify-between items-start gap-2 font-medium cursor-pointer ">
					<div className="flex flex-row justify-start items-center gap-4">
					{number && <span>{number}-</span>}
					<span> {question}</span>
					</div>
                	<span className="transition group-open:rotate-180">
                    	<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    	</svg>
                	</span>
				</summary>
				<p className="text-neutral-600 mt-3 ps-8 group-open:animate-fadeIn">
					{answer}
				</p>
			</details>
		</div>
    )
}