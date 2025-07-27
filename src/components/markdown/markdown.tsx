import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

type MarkdownProps = {
  content: string;
  className?: string;
}

export const Markdown = ({content}:MarkdownProps) =>{
  return (
    <ReactMarkdown
      
      remarkPlugins={[remarkGfm]}
      components={{
        // Custom components can be defined here if needed
        h1: ({children}) =>(
          <h1 className="mb-4 text-heading-md md:text-heading-xl">
            {children}
          </h1>
        ),
        h2: ({children}) => (
          <h2 className="mb-4 text-heading-sm md:text-heading-md">
            {children}
          </h2>
        ),
        a: ({href, children}) => (
          <a href={href}  className="text-blue-200 hover:text-blue-100 underline" >
            {children}
          </a>
        ),
        p: ({children}) => (
          <p className="mb-6 leading-relaxed text-body-sm md:text-body-md text-gray-200">
            {children}
          </p>
        ),
        strong: ({children}) => (
          <strong className="font-extrabold md:text-body-md text-gray-100">
            {children}
          </strong>
        ),
      }}
      >
        {content}
    </ReactMarkdown>
  );
}      
       
