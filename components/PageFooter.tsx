export const PageFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return (
    <footer {...props} className="mt-20 py-4">
      <p className="text-center text-small text-default-500">
        这个网站是用开源魔法和爱心打造的 ✨
      </p>
    </footer>
  );
};
