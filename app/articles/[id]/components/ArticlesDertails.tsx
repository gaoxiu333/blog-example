"use client";

import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

const ArticlesDetails = (props: { content: string }) => {
  const Component = useMemo(
    () => getMDXComponent(props.content),
    [props.content]
  );

  return (
    <>
      <article className="prose !max-w-none dark:prose-invert">
        <Component />
      </article>
    </>
  );
};

export { ArticlesDetails };
