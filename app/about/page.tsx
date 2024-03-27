const About: React.FC = () => {
  return (
    <main className="container mt-20 prose dark:prose-invert">
      <h1 className="text-3xl font-semibold">关于</h1>
      <p className="text-default-500">这个网站是用开源魔法和爱心打造的 ✨</p>
      <h3>使用堆栈</h3>
      <ul>
        <li>Next.js</li>
        <li>TailwindCSS</li>
        <li>NextUI</li>
        <li>TypeScript</li>
        <li>MDX</li>
      </ul>
      <h3>功能</h3>
      <ul>
        <li>暗黑主题</li>
        <li>文章列表</li>
        <li>mdx、md的支持</li>
        <li>代码高亮</li>
      </ul>
    </main>
  );
};
export default About;
