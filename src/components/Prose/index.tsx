import clsx from 'clsx'

export function Prose<T extends React.ElementType = 'div'>({
  as,
  className,
  ...props
}: React.ComponentPropsWithoutRef<T> & {
  as?: T
}) {
  const Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        //base
        `prose 
        prose-neutral 
        prose-base 
        prose-p:text-text 
        prose-p:leading-normal
        prose-p:my-3
        `,
        //heading
        `prose-headings:text-text 
        prose-headings:font-semibold
        prose-headings:tracking-tight 
        prose-headings:text-xl
        prose-headings:mb-3
        `,
        //link
        'prose-a:text-text',
        //ul
        'prose-ul:text-text prose-ul:leading-normal' ,
      )}
      {...props}
    />
  )
}
