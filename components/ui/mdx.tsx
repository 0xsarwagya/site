import { MDXContent } from "@content-collections/mdx/react";
import Image, { type ImageProps } from "next/image";
import type React from "react";

export const MDX: React.FC<{ code: string }> = (props) => {
	return (
		<MDXContent
			code={props.code}
			components={{
				h1: H1,
				h2: H2,
				h3: H3,
				h4: H4,
				p: P,
				ul: UL,
				ol: OL,
				li: LI,
				a: A,
				blockquote: Blockquote,
				inlineCode: InlineCode,
				code: Code,
				pre: Pre,
				table: Table,
				thead: Thead,
				tbody: Tbody,
				th: Th,
				tr: Tr,
				td: Td,
				em: Em,
				strong: Strong,
				del: Del,
				hr: Hr,
				img: Img,
				div: Div,
			}}
		/>
	);
};

const H1: React.FC = (props) => (
	<h1 className="text-2xl font-bold mt-6 mb-4" {...props} />
);
const H2: React.FC = (props) => (
	<h2 className="text-xl font-semibold mt-6 mb-4" {...props} />
);
const H3: React.FC = (props) => (
	<h3 className="text-lg font-semibold mt-5 mb-3" {...props} />
);
const H4: React.FC = (props) => (
	<h4 className="text-base font-semibold mt-5 mb-3" {...props} />
);
const P: React.FC = (props) => (
	<p className="text-sm leading-relaxed mt-2 mb-4" {...props} />
);
const UL: React.FC = (props) => (
	<ul className="list-disc pl-6 mt-2 mb-4 space-y-2" {...props} />
);
const OL: React.FC = (props) => (
	<ol className="list-decimal pl-6 mt-2 mb-4 space-y-2" {...props} />
);
const LI: React.FC = (props) => <li className="ml-2" {...props} />;
const A: React.FC = (props) => (
	<a className="underline hover:underline" {...props} />
);
const Blockquote: React.FC = (props) => (
	<blockquote className="border-l-4 pl-4 italic mt-4 mb-4" {...props} />
);
const InlineCode: React.FC = (props) => (
	<code className="px-1 py-0.5 rounded" {...props} />
);
const Code: React.FC = (props) => (
	<code className="text-sm px-2 py-1 rounded" {...props} />
);
const Pre: React.FC = (props) => (
	<pre className="text-sm p-4 rounded overflow-auto" {...props} />
);
const Table: React.FC = (props) => (
	<table className="table-auto border-collapse w-full mt-4 mb-4" {...props} />
);
const Thead: React.FC = (props) => <thead className="text-left" {...props} />;
const Tbody: React.FC = (props) => <tbody {...props} />;
const Th: React.FC = (props) => (
	<th className="border px-4 py-2 font-semibold" {...props} />
);
const Tr: React.FC = (props) => <tr className="even:bg-gray-50" {...props} />;
const Td: React.FC = (props) => <td className="border px-4 py-2" {...props} />;
const Em: React.FC = (props) => <em className="italic" {...props} />;
const Strong: React.FC = (props) => <strong className="font-bold" {...props} />;
const Del: React.FC = (props) => <del className="line-through" {...props} />;
const Hr: React.FC = (props) => <hr className="border-t my-6" {...props} />;
const Img: React.FC<ImageProps> = (props) => (
	<Image className="max-w-full h-auto rounded mt-4 mb-4" {...props} />
);
const Div: React.FC = (props) => <div className="mt-4 mb-4" {...props} />;
